const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()
const port = 3000

app.use(express.json())

app.get('/todos',(req,res) =>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You sent the wrong input"
        })
        return
    }
    //put it on mongoDB
})

app.post('todos/',(req,res) =>{

})

app.put('/completed',(req,res) =>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid Input"
        })
        return
    }
})

app.listen(port)