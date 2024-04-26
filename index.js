const express = require("express");

// Create an Express application
const app = express();
const PORT = 5678;

// Define a route to say hello
app.get("/", (req, res) => {
  res.send("Hello from your Express REST API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
