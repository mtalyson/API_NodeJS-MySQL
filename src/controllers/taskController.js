const database = require('../database/connection')

class TaskController {
   newTask(req, res) {   
      const {task, description, responsible} = req.body

      database
      .insert({task, description, responsible})
      .table("tasks")
      .then(()=>{
         res.json({message: "Task successfully created!"})
         }).catch(error => {
            console.log(error)
         })
   }

   listTasks(req, res){
      database
      .select("*")
      .table("tasks")
      .then(tasks=>{
         res.json(tasks)
         }).catch(error=>{
            console.log(error)
         })
   }

   listTaskById(req, res){
      const id = req.params.id

      database
      .select("*")
      .table("tasks")
      .where({id:id})
      .then(tasks=>{
            res.json(tasks)
         }).catch(error=>{
            console.log(error)
         })
   }

   updateTask(req, res){
      const id = req.params.id
      const {description} = req.body

      database
      .where({id:id})
      .update({description:description})
      .table("tasks")
      .then(()=>{
         res.json({message: "Task successfully updated"})
      }).catch(error=>{
         res.json(error)
      })
   }
}

module.exports = new TaskController()

