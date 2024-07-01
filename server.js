const express = require("express");
const path = require("path");

const usersRouter = require("./routes/users.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

// Using the handlebars templating engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  // Log method and URL as well as response times
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// Frontend middleware
app.use("/site", express.static(path.join(__dirname, "public")));

// JSON parsing middleware
app.use(express.json());

// Mounted routers
app.get("/", (req, res) => {
  res.render("index", {
    title: "I like turtles",
    caption: "Sea turtles are great",
  });
});
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
