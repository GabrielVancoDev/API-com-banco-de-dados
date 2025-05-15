import express from 'express';

const app = express(); 
// Requisições e respostas
app.get("/usuarios", (req, res) => {
    res.send("Olá, tudo bem?")
})

app.listen(3000)