const express = require('express')
const bodyParser = require('body-parser')
const clienteRouter = require('./routes/cliente')
const requestInterceptor = require('./middlewares/request-interceptor')

const app = express()

app.set('port', 7000)
app.use(bodyParser.json())

app.use(requestInterceptor.iniciar())

clienteRouter(app);

module.exports = app