const TodoModel = require("../model/todo-model");

const getTodos = async (req, res) => {
  try {
    const result = await TodoModel.find();
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    const result = await newTodo.save();
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const deleteTodo = async (req, res) => {
    try{
        const { id } = req.params
        console.log("ID : ", id)
        const result = await TodoModel.findByIdAndDelete(id)
        return res.send(result)
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

const getTodo = async (req , res) => {
    try{
        const { id } = req.params;
        const result = await TodoModel.findById(id)
        return res.send(result);
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

const updateTodo = async(req, res) => {
    try{
        const { id } = req.params;
        const result = await TodoModel.findByIdAndUpdate(id, req.body)
        return res.send(result);
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo
};
