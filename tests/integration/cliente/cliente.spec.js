describe('Integração - Cliente', () => {
    it('Router GET/ clientes', (done) => {
        request
            .get('/clientes')
            .end((err, res) => {
                expect(res.statusCode).to.be.eql(200)
                expect(res.body).to.be.eql({ id: 1, nome: 'dariano' })

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