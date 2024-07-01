const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to users",
    user: "Tester 1",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "turtle.jpg"));
}

function postMessage(req, res) {
  console.log("Updating messages");
}

module.exports = { getMessages, postMessage };
