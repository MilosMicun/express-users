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

    const { active } = req.query;
    if (active !== undefined) {
      const isActive = active === "true";
      const filtered = users.filter(user => user.active === isActive);
      return res.json(filtered);
    }

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const data = await fs.readFile("./users.json", "utf-8");
    const users = JSON.parse(data);
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  if (a === undefined || b === undefined) return res.send("Missing parameters");

  const sum = Number(a) + Number(b);
  if (isNaN(sum)) return res.send("Invalid numbers");

  res.json({ sum });
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
