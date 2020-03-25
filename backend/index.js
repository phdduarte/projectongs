const  express = require('express')

const app = express()

app.use(express.json( )) // Dizer para a aplicacao que iremos receber no formato JSON
//deve vim antes das rotas para avisar ja para o app como iremos recever as requisicoes 

/* 

Rota Recurso

Metodos HTTP

GET: Buscar uma infomacao no back-end
POST: Criar uma informacao no back-end
PUT: Alterar uma infomacao no back-end
DELETE: Deletar uma informacao no back-end 

*/

/**
 * Tipos de parametros:
 * 
 *  Query Params:  parametros nomeados enviados na rota após o simbolo "?" 
 *  geralmente serve para filtros, paginação, 
 * 
 *  Route Params: parametros utilizados  para identificar recursos exempl /users/:id 
 *  para buscar apenas um recurso
 * 
 *  Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 */


app.post('/users', (request, response) => {
    //const params = request.query // acessar vindo da barra na rota exemplo ?name= Pedro
    //const params = request.params
    const params = request.body

    console.log(params)

    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
} )

app.get('/', (request, response) => {
    return response.json({
        event : "Resposta",
        name : "Pedro" 
    }) 
} )

app.listen(3333)