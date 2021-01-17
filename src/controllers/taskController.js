const database = require('../database/connection')

class TaskController {
   newTask(req, res) {
      
      const {task, description, responsible} = req.body
      
      database.insert({task, description, responsible}).table("tasks")
         .then(()=>{
            res.json({message: "Task successfully created!"})
         }).catch(error => {
            console.log(error)
         })

   }
}

module.exports = new TaskController()

