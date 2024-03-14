const express = require("express");
const app = express();

app.use(express.json());

app.get('/alunos', (req, res) => {
    console.log(req.query)
    console.log("Entrou no Alunos")
    res.status(200).send('Deu certo!')
})

app.get('/alunos/:id/:outro', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.outro)
    console.log("Entrou no Alunos")
    res.status(200).send('Deu certo!')
})

app.post('/alunos', (req, res) => {
    console.log(req.body)
    console.log("Entrou no Alunos")
    res.status(200).send(req.body)
})

app.listen(3000, () => {
    console.log("Servidor iniciado")
})