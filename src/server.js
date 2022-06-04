const express = require("express")

const app = express()

const query = require("./backend/query")

const config = require("./config/config")

const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/usuarios", async (req, res)=>{
    const result = await query.getAllUsers();
    res.status(200).json({result})
})

app.listen(config.port, () => {console.log(`Servidor inicializado na porta ${config.port}`)})
