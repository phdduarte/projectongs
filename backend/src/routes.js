const  express = require('express')

const routes = express.Router()

routes.post('/users', (request, response) => {
    //const params = request.query // acessar vindo da barra na rota exemplo ?name= Pedro
    //const params = request.params
    const params = request.body

    console.log(params)

    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
} )

routes.post('/', (request, response) => {
    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
} )

module.exports = routes // exortar a variavel routes para fora do arquivo