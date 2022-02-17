const express = require("express");
require("./db");
const TodoRouter = require("./router/todo-routes");

const app = express();
app.use(express.json());

app.use("/todos", TodoRouter)

app.listen(9001, () => console.log("Server started at PORT : 9001"));