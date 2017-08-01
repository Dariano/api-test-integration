const axios = require('axios')

class RequestInterceptor {
    iniciar() {
        return (req, res, next) => {
            axios.interceptors.request.use((config) => {
                return config;
            })

            next()
        }
    }
}

module.exports = new RequestInterceptor()