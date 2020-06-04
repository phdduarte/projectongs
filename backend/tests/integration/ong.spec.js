const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy(); // destruir a coneção depois de finalizar o teste
    }); // executar depois de todos os testes
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
	            email: "contato@teste.com",
	            whatsapp: "4700000000",
	            city: "Belo Horizonte",
	            uf: "MG"    
            });   

        expect(response.body).toHaveProperty('id'); // tenha uma propriedade chamada id
        expect(response.body.id).toHaveLength(8); // tenha 8 caracteres 
    });
});
