const express = require("express");

const app = express();

const PORT = 3000;

const users = [
  {
    id: 0,
    name: "Test",
  },
  {
    id: 1,
    name: "Test",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = users[userId];
  if (user) {
    res.json(user);
  } else {
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>List Item</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
