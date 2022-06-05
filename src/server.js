const express = require("express")

const app = express()

// const query = require("./backend/query")

// const UsersController = require('./backend/controllers/UsersController')

const config = require("./config/config")

const cors = require("cors")

const pureQuerys = require("./backend/purequerys")

app.use(express.json())

app.use(cors())

// app.get("/usuarios", async (req, res)=>{
//     const result = await query.getAllUsers();
//     res.status(200).json({result})
// })

// app.post('/login',UsersController.login)

app.get("/usuarios", async (req, res)=>{
    console.log(req)
    await pureQuerys.getAllUsers(res)
})
app.post("/login", async (req, res)=>{
    await pureQuerys.login(req, res)
})

app.listen(config.port, () => {console.log(`Servidor inicializado na porta ${config.port}`)})
