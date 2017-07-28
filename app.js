const express = require('express')
const bodyParser = require('body-parser')
const clienteRouter = require('./routes/cliente')

const app = express()

app.set('port', 7000)
app.use(bodyParser.json())

clienteRouter(app);

module.exports = app