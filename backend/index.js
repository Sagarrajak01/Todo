const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const app = express();
const port = 3000;
const cors = require("cors")

app.use(express.json());
app.use(cors({}))

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


app.listen(port)