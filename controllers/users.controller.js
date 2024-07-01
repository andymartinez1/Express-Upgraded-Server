const model = require("../models/users.model");

function postUsers(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing user name",
    });
  }
  const newUser = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newUser);

  res.json(newUser);
}

function getUsers(req, res) {
  res.send(model);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = model[userId];
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User does not exist." });
  }
}

module.exports = { postUsers, getUsers, getUser };
