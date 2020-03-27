const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors()) // permitindo todas as aplicacoes acessar
// quando tiver em producao colocar qual a url da nossa aplicacao
// app.use(cors({
//     origin: 'https://www.pdwebdesign.com.br' 
// }))

app.use(express.json()) // Dizer para a aplicacao que iremos receber no formato JSON
//deve vim antes das rotas para avisar ja para o app como iremos recever as requisicoes 
app.use(routes)


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

/**
 * SQL: MySQL, SQLite, PostgreSQL, ORacle, Microsoft SQL Server
 * NoSQL : MongoDB, COuchDB, etc 
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where() -> O query builder que vamos usar é o knex.js 
 *  para instalar ele é so usar npm install knex 
 *  e instalar o banco de acordo com o banco que vamos usar, no caso aqui é o sqlite3
 *  para isso é so da o comando:
 *  npm install sqlite3
 * 
 *  Para iniciar a configuracao do banco fazemos:
 *  npx knex init
 */

app.listen(3333)