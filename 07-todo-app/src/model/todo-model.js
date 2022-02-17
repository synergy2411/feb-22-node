const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    label : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        default : false
    }
})

const TodoModel = model("Todo", todoSchema);

module.exports = TodoModel;
