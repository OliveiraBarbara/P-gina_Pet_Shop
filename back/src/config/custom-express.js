const express = require('express')
const routesPets = require('../app/routes/routes-animals')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req, resp, next) => {
    req.body.cpf = Number(req.body.cpf)
    next()
})

routesPets(app)

app.use((req,resp)=>{
    resp.status(404).json({mensagem : "Não foi possível encontrar o recurso"})
})

// app.use((error,req,resp,next)=>{
//     resp.status(500).json({mensagem : "Houve um erro interno no servidor"})
// })  

module.exports = app

