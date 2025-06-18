const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({ message: "You sent the wrong input" });
        return;
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({ message: "Todo Created" });
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.json({ todos });
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({ message: "Invalid Input" });
        return;
    }

    await Todo.updateOne(
        { _id: req.body.id },
        { $set: { completed: true } }
    );

    res.json({ message: "Todo marked as completed" });
});

app.listen(port)