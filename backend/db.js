const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/")

const todoSchema = mongoose.todoSchema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}