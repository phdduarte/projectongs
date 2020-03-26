const  express = require('express')
const crypto = require('crypto')

const connection = require('./database/connection')

const routes = express.Router()

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
})

routes.post('/ongs', async (request, response) => {
    //const params = request.query // acessar vindo da barra na rota exemplo ?name= Pedro
    //const params = request.params
    const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    console.log(name)
    console.log(email)
    console.log(whatsapp)
    console.log(city)
    console.log(uf)

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    }) 

    return response.json({ id }) 
})

routes.post('/', (request, response) => {
    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
})

module.exports = routes // exortar a variavel routes para fora do arquivo