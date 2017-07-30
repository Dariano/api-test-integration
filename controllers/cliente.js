const axios = require('axios')
const calculadora = require('../helpers/calculadora')
const banco = require('../services/banco')

class Cliente {
    async buscar() {
        return await axios
            .get(`https://api.github.com/users/dariano`)
            .then(res => res.data)
            .catch(console.log)
    }

    somar(a, b) {
        return calculadora.somar(a, b)
    }

    buscarSaldo(){
        return banco.saldo()
    }
}

module.exports = Cliente