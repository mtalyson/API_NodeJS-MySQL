const express = require('express')
const app = express()

const task = require('./src/routes/task')

app.use(express.json())
app.use(task)

app.listen(3000, function(){
   console.log("Servidor rodando na URL: http://localhost:3000")
})

app.get('/', (req, res) => {
   res.send("Hello World!")
})