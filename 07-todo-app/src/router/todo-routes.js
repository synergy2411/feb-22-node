const express = require("express");
const TodoModel = require("../model/todo-model");
const TodoRouter = express.Router();

TodoRouter.route("/")
    .get((req, res) => {
        TodoModel.find().then(result => {
            return res.send(result)
        }).catch(err => {
            console.log(err);
            return res.send(err)
        })
    })
    .post((req, res) => {
        const newTodo = new TodoModel(req.body);
        newTodo.save().then(result => {
            return res.send(result)
        }).catch(err=>{
            console.log(err);
            return res.send(err);
        })
    })

module.exports = TodoRouter;