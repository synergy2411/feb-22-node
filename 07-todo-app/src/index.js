const express = require("express");
require("./db");
const TodoModel = require("./model/todo-model");

const app = express();
app.use(express.json());


app.post("/todos", (req, res) => {
    const newTodo = new TodoModel(req.body);
    newTodo.save().then(result => {
        return res.send(result)
    }).catch(err=>{
        console.log(err);
        return res.send(err);
    })
})

app.get("/todos", (req, res) => {
    TodoModel.find().then(result => {
        return res.send(result)
    }).catch(err => {
        console.log(err);
        return res.send(err)
    })
})

app.listen(9001, () => console.log("Server started at PORT : 9001"));