const Cliente = require('./../controllers/cliente')

module.exports = (app) => {
    let clienteContrller = new Cliente()
    app.route('/clientes')
        .get((req, res) => {
            clienteContrller
                .buscar()
                .then((c) => {

                    res.status(200)
                    res.json({ id: c.id, nome: c.login })
                })

        })
        .post((req, res) => {
            res.sendStatus(201)

            res.json(res.body)
        })
}