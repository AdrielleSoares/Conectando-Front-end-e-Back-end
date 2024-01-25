const express = require('express')
const cors = require ('cors')

const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
      name: 'Adrielle',
      age: 32,
    },
]

app.get('/usuarios', function (request, response) {
    response.json (users)
})

app.post('/usuarios', function (request, response) {
    console.log (request.body)

    const newUser = request.body

    users.push (newUser)

    response.status(201).json(newUser)
})

app.delete('/usuarios/:id', function (request, response) {
    console.log(request.params.id);
    const id = request.params.id

    users.splice(id, 1)

    response.send("usuario deletado")
});

app.listen(3001, () => console.log ("Servidor rodando"))