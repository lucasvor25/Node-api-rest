const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./banco-de-dados/rotas/fornecedores')
app.use('/api/fornecedores/', roteador)

app.listen(config.get('api.porta'), () => {
    console.log("Api esta funcionando")
})
