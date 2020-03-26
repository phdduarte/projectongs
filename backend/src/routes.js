const  express = require('express')

const routes = express.Router()

routes.post('/ongs', (request, response) => {
    //const params = request.query // acessar vindo da barra na rota exemplo ?name= Pedro
    //const params = request.params
    const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    console.log(name)
    console.log(email)
    console.log(whatsapp)
    console.log(city)
    console.log(uf)

    return response.json() 
})

routes.post('/', (request, response) => {
    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
})

module.exports = routes // exortar a variavel routes para fora do arquivo