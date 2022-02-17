const express = require("express");
const { getTodos, createTodo, deleteTodo, getTodo, updateTodo } = require("../controller/todo-controller");
const TodoRouter = express.Router();

TodoRouter.route("/")
    .get(getTodos)
    .post(createTodo)

TodoRouter.route("/:id")
    .delete(deleteTodo)
    .get(getTodo)
    .patch(updateTodo)

module.exports = TodoRouter;