const express = require("express");

const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

// User middleware
usersRouter.use((req, res, next) => {
  console.log("IP Address:", req.ip);
  next();
});
usersRouter.post("/", usersController.postUsers); // Paths updated to relative path of mounted router in server.js
usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:userId", usersController.getUser);

module.exports = usersRouter;
