const express = require("express");

const usersController = require("./controllers/users.controller");
const messagesContoller = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  // Log method and URL as well as response times
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

// JSON parsing middleware
app.use(express.json());

// Add user POST middleware
app.post("/users", usersController.postUsers);
app.get("/users", usersController.getUsers);
app.get("/users/:userId", usersController.getUser);

app.get("/messages", messagesContoller.getMessages);
app.post("/messages", messagesContoller.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
