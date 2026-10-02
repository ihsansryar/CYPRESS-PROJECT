describe('Login custom command', () => {
     beforeEach(() => {
          cy.fixture('json3').as('users')
     })

     it('login sukses', function () {
          cy.login(this.users.valid.username, this.users.valid.password)

          cy.url().should('include', '/inventory.html')
          cy.get('.title').should('have.text', 'Products')
     })
})
