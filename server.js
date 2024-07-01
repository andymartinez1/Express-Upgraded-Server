const express = require("express");

const usersRouter = require("./routes/users.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = 3000;

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  // Log method and URL as well as response times
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// JSON parsing middleware
app.use(express.json());

// Mounted routers
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
