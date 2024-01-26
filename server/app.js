const express = require('express');
const app = express();
const connect = require('./db/connect');
const Task = require('./models/Task')


app.use(express.json());
connect();

app.get('/viewtasks', async (req, res) => {
    try {
        const tasks = await Task.find()
        console.log(tasks);
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.post('/addtask', async (req, res) => {
    const { title, description, completeBy } = req.body;
    const completeby = new Date(completeBy)
    if (completeby < Date.now()) {
        return res.status(422).send("Enter valid date");
    }
    try {
        const task = await Task.create({ title, description, completeBy: completeby })
        console.log(task);
        res.status(200).send("Task added Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while Adding the task" + error.message)
    }
})

app.patch('/markcomplete', async (req, res) => {
    const { id } = req.query;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send("Task Not Found");
        }
        else {
            if (task.taskStatus) {
                return res.status(400).send("Task was already marked Complete")
            }
            else {
                task.taskStatus = true;
                try {
                    await task.save();
                    console.log(task);
                    res.status(200).send("Task Marked Complete");
                } catch (error) {
                    res.status(500).send("Error while updating the status" + error.message)
                }
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.patch('/edittask', async (req, res) => {
    console.log(req.body);
    const { id, title, description } = req.body;
    console.log(Date.now())
    try {
        const task = await Task.findByIdAndUpdate(id, { title, description });
        console.log(task);
        res.status(200).send("Task Updated Successfully")
    } catch (error) {
        res.status(500).send("Error while Updating the task" + error.message);
    }
})


app.delete('/deletetask', async (req, res) => {
    console.log(req.query);
    const { id } = req.query;
    try {
        const task = await Task.findByIdAndDelete({ _id: id })
        console.log(task)
        res.status(200).send("Task Deleted Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while deleting the task" + error.message);
    }
})


app.listen(3000, () => {
    console.log("App running at port 3000");
})