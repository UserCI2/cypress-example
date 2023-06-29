describe('api simple test', () => {
    it.only('Should return valid get response', () => {
        // cy.request({
        //     method: 'GET',
        //     url: 'https://catfact.ninja/breeds'
        // }).then(response => {
        //     expect(response.status).to.eq(200);
        //     expect(response.body).to.have.property("data");
        // })
        function handle(arg: any) {
            console.log(arg)
        }
        cy.wrap(1).then(arg => {
            handle(arg)
        })
    })
})