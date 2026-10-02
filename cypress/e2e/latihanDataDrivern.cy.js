describe('LATIHAN DATA DRIVEN', () => {
   beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.url().should('include','/login') 
   })
    

    it('Login dengan akun yang valid', () => {

        cy.fixture('Driven.json').then((users) => {

            const validUser = users.find(u => u.expected === 'succsess')


            cy.get('#username').type(validUser.username)
            cy.get('#password').type(validUser.password)
            cy.get('button[type="submit"]').click()

                // validasi halaman sukses
        
            cy.url().should('include', '/secure')
            cy.get('#flash b').should('contain', 'You logged into a secure area!')
    
    
        })
    })
})   
        
