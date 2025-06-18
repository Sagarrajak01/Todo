const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Todo")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};