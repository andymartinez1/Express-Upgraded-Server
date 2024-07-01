const express = require("express");

const messagesContoller = require("../controllers/messages.controller");

const messagesRouter = express.Router();

// Messages middleware
messagesRouter.get("/", messagesContoller.getMessages);
messagesRouter.post("/", messagesContoller.postMessage);

module.exports = messagesRouter;
