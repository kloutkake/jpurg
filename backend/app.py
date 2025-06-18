from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)
POSTS_FILE = os.path.join(os.path.dirname(__file__), 'posts.json')

# Load posts from file
def load_posts():
    try:
        with open(POSTS_FILE, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        # Return empty list if file doesn't exist or is empty
        return []

# Save posts to file
def save_posts(posts):
    with open(POSTS_FILE, 'w') as f:
        json.dump(posts, f, indent=2)

# GET all posts
@app.route('/backend/posts', methods=['GET'])
def get_posts():
    return jsonify(load_posts())

# POST a new post
@app.route('/backend/posts', methods=['POST'])
def add_post():
    new_post = request.get_json()
    if not all(k in new_post for k in ("title", "date", "link", "content")):
        return jsonify({"error": "Missing title, date, link, or content"}), 400

    # Add timestamp for blog.js compatibility
    new_post['timestamp'] = new_post['date']
    
    posts = load_posts()
    posts.append(new_post)
    save_posts(posts)
    return jsonify({"message": "Post added"}), 201

if __name__ == '__main__':
    app.run(debug=True)
