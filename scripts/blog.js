// Fetch blog posts from the Flask API
fetch("/backend/posts")
  .then((res) => res.json())
  .then((posts) => {
    if (!posts || posts.length === 0) {
      document.getElementById("blog-posts").innerHTML = '<p class="text-gray-500">No blog posts yet.</p>';
      return;
    }

    // Group posts by year
    const grouped = posts.reduce((acc, post) => {
      const year = new Date(post.timestamp || post.date).getFullYear();
      acc[year] = acc[year] || [];
      acc[year].push(post);
      return acc;
    }, {});

    // Render blog entries
    const blogContainer = document.getElementById("blog-posts");
    Object.keys(grouped)
      .sort((a, b) => b - a)
      .forEach((year) => {
        const yearBlock = document.createElement("div");
        yearBlock.innerHTML = `<h2 class="text-2xl font-semibold mb-4"># ${year}</h2>`;

        grouped[year]
          .sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date))
          .forEach((post) => {
            const date = new Date(post.timestamp || post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            });

            const entry = document.createElement("div");
            entry.className = "ml-4 mb-3";
            entry.innerHTML = `
              <p class="text-gray-300">
                [${date}]<br>
                – <a href="${post.link}" class="text-blue-400 hover:text-blue-300 hover:underline">${post.title}</a>
              </p>
            `;
            yearBlock.appendChild(entry);
          });

        blogContainer.appendChild(yearBlock);
      });
  })
  .catch((err) => {
    console.error("Failed to load posts:", err);
    document.getElementById("blog-posts").innerHTML = '<p class="text-red-400">Failed to load blog posts.</p>';
  });
