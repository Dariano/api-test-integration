const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('port', 7000)
app.use(bodyParser.json())

app.route('/clientes')
  .get((req, res) => {
    res.status(200)
    res.json({ id: 1, nome: 'dariano'})
  })
  .post((req, res) => {
    res.sendStatus(201)

    res.json(res.body)
  })

module.exports = app