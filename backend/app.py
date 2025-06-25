from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app, origins=['http://localhost:5500', 'http://127.0.0.1:5500'])  # Enable CORS for Live Server

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
    print("GET request received for posts")  # Debug print
    return jsonify(load_posts())

# POST a new post
@app.route('/backend/posts', methods=['POST'])
def add_post():
    print("POST request received")  # Debug print
    try:
        new_post = request.get_json()
        print(f"Received data: {new_post}")  # Debug print

        if not all(k in new_post for k in ("title", "date", "link", "content")):
            print("Missing required fields")  # Debug print
            return jsonify({"error": "Missing title, date, link, or content"}), 400

        # Add timestamp for blog.js compatibility
        new_post['timestamp'] = new_post['date']
        posts = load_posts()
        posts.append(new_post)
        save_posts(posts)
        print("Post saved successfully")  # Debug print
        return jsonify({"message": "Post added"}), 201
    except Exception as e:
        print(f"Error: {e}")  # Debug print
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, host='localhost', port=5000)
                                                         
