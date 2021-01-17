const express = require('express')
const app = express()

app.listen(3000, function(){
   console.log("Servidor rodando na URL: http://localhost:3000")
})

app.get('/', (req, res) => {
   res.send("Hello World!")
})