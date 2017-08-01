const nock = require('nock')

describe('Integração - Cliente', () => {
    beforeEach(() => {
        let clienteMock = { id: 1, login: 'Dariano'}

        nock('https://api.github.com')
            .get('/users/dariano')
            .reply(200, clienteMock)
    });


    it('Router GET /clientes', (done) => {
        request
            .get('/clientes')
            .set('Authorization', '123456789')
            .end((err, res) => {
                expect(res.statusCode).to.be.eql(200)
                expect(res.body).to.be.eql({ id: 1, nome: 'Dariano' })

                done(err)
            })
    });

    it('Router POST/ clientes', (done) => {
        request
            .post('/clientes')
            .send({ nome: 'Maria' })
            .end((err, res) => {
                expect(res.statusCode).to.be.eql(201)

                done(err)
            })
    });
});