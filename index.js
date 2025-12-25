const express = require("express");
const fs = require("fs/promises");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to User API");
});

app.get("/users", async (req, res) => {
  try {
    const data = await fs.readFile("./users.json", "utf-8");
    const users = JSON.parse(data);
    res.json(users);
  } catch (err) {
    console.error("Error reading users.json:", err.message);
    res.status(500).send("Server error");
  }
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
