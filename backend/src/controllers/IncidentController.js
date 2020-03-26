const connection = require('../database/connection')

module.exports = {
    async create (request, response) {
        const { title, description, value} = request.body
        const ong_id = request.headers.authorization

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        const id = result[0]

        return response.json({ id })
    }
}