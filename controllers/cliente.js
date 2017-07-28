const axios = require('axios')

class Cliente {
    constructor() {
    }

    async buscar() {
        return await axios
            .get(`https://api.github.com/users/dariano`)
            .then(res => res.data)
            .catch(console.log)
    }
}

module.exports = Cliente