const express = require("express");
require("./db");
const TodoRouter = require("./router/todo-routes");

const app = express();
app.use(express.json());

app.use("/todos", TodoRouter)

module.exports = app;

