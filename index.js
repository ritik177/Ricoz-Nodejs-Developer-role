const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello, welcome to my Node.js !");
});

// Sample API route
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "nitesh", email: "niteshsingh.com" },
    { id: 2, name: "sanjeev", email: "sanjeevsingh.com" },
  ];
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
