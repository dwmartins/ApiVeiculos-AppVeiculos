const db = require("./db")
const express = require('express');
const cors = require('cors');
const { json } = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    // console.log("Acessou o MiddLeare!")
    app.use(cors());
    next();
}) 

app.get("/veiculos", async (req, res) => {
    res.header("Access-control-allow-origin", "*");
    const veiculos = await db.selectCars();
    res.send(veiculos)
})

app.listen(3002, () => {
    console.log("Servidor iniciado na porta 3002")
})