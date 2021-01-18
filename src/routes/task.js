const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

router.post('/newTask', TaskController.newTask)

router.get('/tasks', TaskController.listTasks)

router.get('/task/:id', TaskController.listTaskById)

module.exports = router