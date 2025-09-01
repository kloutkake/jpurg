# New website!

My old website was created using next.js, and while I miss it and all the hard work I put into that navbar, this static html/css/js site with a flask backend is much easier to manage. 

# My Blog Website Architecture
Tech Stack: Flask (Python) backend + static HTML frontend with Tailwind CSS
## File Structure:
- /backend/ - Flask API (app.py) + blog data (posts.json)
- /posts/ - Dynamic post template (post.html)
- /pages/ - Static pages (blog.shtml, admin.html, etc.)
- /scripts/ - JavaScript (blog.js)
- /navbar/ - Shared navbar via SSI

## How It Works:

- Flask serves JSON API at /backend/posts (GET/POST)
- Blog posts stored as JSON with markdown content
- post.html fetches all posts, finds matching slug, renders markdown
- blog.js displays post list grouped by year
- Admin interface (admin.html) creates new posts via API
- Uses Server Side Includes (SSI) for navbar in .shtml files

**Styling:** Tailwind CSS with custom typography classes using [&>element]:class syntax for markdown content
**Development:** Home Ubuntu server
**Production:** Digital Ocean droplet

