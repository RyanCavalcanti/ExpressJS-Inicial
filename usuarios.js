const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor iniciado")
})

app.get('/usuarios', (req, res) => {
    console.log('API get usuários')
    res.status(200).send("Todos os usuários")
})

app.get('/usuarios/:id', (req, res) => {
    console.log('API get por id')
    res.status(200).send(req.params.id)
})

app.post('/usuarios', (req, res) => {
    console.log('API post usuário')
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