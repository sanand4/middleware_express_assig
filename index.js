const express = require("express");
const app = express();

// Simulating user authentication status (example)
const isAuthenticated = true;

// Custom middleware to check if user is authenticated
const checkAuth = (req, res, next) => {
  if (isAuthenticated) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send an error response
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Endpoint: /post
app.get("/post", checkAuth, (req, res) => {
  // Backend data (example)
  const posts = [
    { id: 1, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    // ...add more posts here
  ];

  // Send the posts as a response
  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
