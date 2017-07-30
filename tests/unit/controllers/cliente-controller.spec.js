const clienteController = require('./../../../controllers/cliente')
const calculador = require('./../../../helpers/calculadora')
const banco = require('../../../services/banco')

describe('Controller: Cliente', () => {
    let controller

    before(() => {
        controller = new clienteController()
    });

    it('deve somar 4 + 6 = 10', () => {
        calculador.somar = td.function()

        let respostaEsperada = 10

        td.when(calculador.somar(4,6))
            .thenReturn(respostaEsperada)

        let resposta = controller.somar(4, 6)

        expect(resposta).to.be.eql(respostaEsperada)
    })

    it('deve buscar o saldo do banco', () => {
        let saldo = 10.000

        banco.saldo = td.function()
        td.when(banco.saldo())
            .thenReturn(saldo)

        let resposta = controller.buscarSaldo()

        expect(resposta).to.be.eql(saldo)

    });
})