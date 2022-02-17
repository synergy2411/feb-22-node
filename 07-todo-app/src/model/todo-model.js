const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    label : {
        type : String,
        validate : {
            validator : (value) => {
                // return value.indexOf('@') >= 0
                return true;
            },
            message : "Should have @ character"
        },
        required : true
    },
    status : {
        type : Boolean,
        default : false
    },
    // age : {
    //     type : Number,
    //     max : [60, "Too old to hit API"]
    // }
})

todoSchema.pre("save", () => {
    console.log("Before Storing the Data")
})
todoSchema.post("save", () => {
    console.log("After Storing the Data")
})

todoSchema.method("myMethod", ()=>{
    console.log("My Methods to execute")
})

const TodoModel = model("Todo", todoSchema);

module.exports = TodoModel;
