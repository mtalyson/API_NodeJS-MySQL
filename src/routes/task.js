const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

router.get('/tasks', TaskController.listTasks)

router.get('/task/:id', TaskController.listTaskById)

router.post('/newTask', TaskController.newTask)

router.put('/update/task/:id', TaskController.updateTask)

router.delete('/delete/task/:id', TaskController.deleteTask)

module.exports = router