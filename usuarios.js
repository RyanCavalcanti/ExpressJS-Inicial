const express = require("express");
const app = express();

app.use(express.json());

const users = []

app.listen(3000, () => {
    console.log("Servidor iniciado")
})

app.get('/usuarios', (req, res) => {
    console.log('API get usuários')
    res.status(200).send({users: users})
})

app.get('/usuarios/:id', (req, res) => {
    const alunoID = req.params.id;
    console.log('API get por id');
    res.status(200).send(users.find(x => x.id == alunoID));
})

app.post('/usuarios', (req, res) => {
    console.log('API post usuário')
    users.push(req.body)
    res.status(200).send(req.body)
})

app.put('/usuarios/:id', (req, res) => {
    console.log('API put usuário')
    res.status(200).send(req.params.id)
})

app.delete('/usuarios/:id', (req, res) => {
    console.log('API delete usuários')
    res.status(200).send(req.params.id)
})