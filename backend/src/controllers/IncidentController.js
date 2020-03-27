const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query // busca dentro do parametro passado na url=?nuemro_da_pagina

        const [count] = await connection('incidents') // o uso de [] em torno do count é para pegar apenas um valor
            .count()

        console.log(count)    

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // apenas os incidentes que tenham o id da ong
            .limit(5) // limitar a busca no banco de dados para fazer paginacao
            .offset((page - 1) * 5) // para pegar 5 em 5 os regristros pulando a primeira pagina por isso o page - 1
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city' , 
                'ongs.uf'
            ]) // busca da tabela incidentes todos porem da 
            // tabela ongs ele busca cada um dos elementos, porque o id tem o mesmo nome para incidentes e para ongs 

        response.header('X-Total-Count', count['count(*)']) // cabecalho que retorna dentro do header da resposta a paginacao    

        return response.json(incidents)
    },

    async create (request, response) {
        const { title, description, value} = request.body
        const ong_id = request.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        return response.json({ id })
    },

    async delete(request, response){
        const { id } = request.params
        const ong_id = request.headers.authorization // precisa pegar o ID da ong logada dentro do headers authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ erro: 'Operation not permitted.' }) // erro 401 - nao autorizado
        }  

        await connection('incidents').where('id', id).delete()

        return response.status(204).send() // status resposta sem conteudo para o front end     
    }
}