describe('LATIHAN TABLE', () => {
   beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/tables')
    cy.url().should('include','/tables') 
    })

        it ('validasi data frank lampard $51.00', () => {

        let ditemukan = 0 
        cy.get('#table1 tbody tr').each($row => {
        const firstname = Cypress.$($row).find('td').eq(1).text().trim()
        const Due = Cypress.$($row).find('td').eq(3).text().trim()

        if (firstname === 'Frank' && Due === '$51.00') {
        ditemukan += 1
        }
        })

        .then(() => {
        expect(ditemukan, 'data Frank dengan due $51.00 ditemukan').to.eq(1)
        })
    })    

})

