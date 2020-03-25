const  express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        event : "Resposta",
        name : "Pedro" 
    })
} )

app.listen(3333)