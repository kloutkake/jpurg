from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import markdown

app = Flask(__name__)
CORS(app, origins=['http://localhost:8080', 'http://127.0.0.1:8080'])

POSTS_FILE = os.path.join(os.path.dirname(__file__), 'posts.json')

# Load posts from file
def load_posts():
    try:
        with open(POSTS_FILE, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        # Return empty list if file doesn't exist or is empty
        return []

def save_posts(posts):
    with open(POSTS_FILE, 'w') as f:
        json.dump(posts, f, indent=2)

# Configure markdown with extensions
md = markdown.Markdown(extensions=[
    'fenced_code',  # for ```code blocks```
    'tables',       # for tables
    'toc',         # for table of contents
    'nl2br',       # converts newlines to <br> tags
    'codehilite'   # syntax highlighting
])

# GET all posts
@app.route('/backend/posts', methods=['GET'])
def get_posts():
    posts = load_posts()
    
    # Convert markdown to HTML for each post
    for post in posts:
        if 'content' in post:
            post['content_html'] = md.convert(post['content'])
            md.reset()  # Reset the markdown parser for the next post

    print("GET request received for posts")  # Debug print
    return jsonify(posts)

# POST a new post
@app.route('/backend/posts', methods=['POST'])
def add_post():
    try:
        new_post = request.get_json()
        print(f"Received data: {new_post}")  # Debug print

        if not all(k in new_post for k in ("title", "date", "link", "content")):
            return jsonify({"error": "Missing title, date, link, or content"}), 400

        new_post['timestamp'] = new_post['date']
        posts = load_posts()
        posts.append(new_post)
        save_posts(posts)
        
        return jsonify({"message": "Post added"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, host='localhost', port=5000)
