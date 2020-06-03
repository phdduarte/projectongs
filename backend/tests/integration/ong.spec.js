const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name : "APAD",
	            email : "contato@teste.com.br",
	            whatsapp : "23123312",
	            city : "Belo Horizonte",
	            uf : "MG"    
            })   
    });
});
