const express = require("express");
const { getTodos, createTodo, deleteTodo } = require("../controller/todo-controller");
const TodoRouter = express.Router();

TodoRouter.route("/")
    .get(getTodos)
    .post(createTodo)

TodoRouter.route("/:id")
    .delete(deleteTodo)

module.exports = TodoRouter;