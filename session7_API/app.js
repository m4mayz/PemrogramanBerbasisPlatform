const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = [];
let nextId = 1;

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, status = 'pending' } = req.body;

    if(!title){
        return res.status(400).json({error: 'Title is required'})

    }

    if(tasks.length == 0){
        nextId = 1
    }

    const newTask = {
        id: nextId++,
        title,
        description: description || '',
        status,
        createdAt: new Date()
    }

    task.push(newTask)
    res.status(201).json(newTask)
})

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks)
})

// Get a task by ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)

    if(!task){
        return res.status(404).json({error: 'Task not found'})
    }

    res.json(task)
})

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const taskIndex = tasks.findIndex(t => t.id === taskId)

    if(taskIndex === -1){
        return res.status(404).json({error: 'Task not found'})
    }

    // Merge existing task with update
    tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...req.body,
        updatedAt: new Date()
    }

    res.json(tasks[taskIndex])
})

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const taskIndex = tasks.findIndex(t => t.id === taskId)

    if(taskIndex === -1){
        return res.status(404).json({error: 'Task not found'})
    }

    tasks.splice(taskIndex, 1)
    res.status(204).send()
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app