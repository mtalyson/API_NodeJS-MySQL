const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

router.post('/newTask', TaskController.newTask)

module.exports = router