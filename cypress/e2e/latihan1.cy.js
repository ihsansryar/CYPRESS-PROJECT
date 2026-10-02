describe('tes latihan Ican', () => {
    it('Harus mengisi email', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.url().should('include', 'commands/actions')

        cy.get('#email1')
        .type('ihsan.surya@recis.co.id')
        .should('have.value', 'ihsan.surya@recis.co.id')

        cy.pause()

        cy.get('#fullName1')
        .should('have.attr', 'placeholder', 'Enter your name')
        .type('Ihsan Surya')
        .should('have.value', 'Ihsan Surya')

        cy.pause()

        cy.get('.action-checkboxes [type="checkbox"]').check('checkbox1')
        .should('be.checked')

        cy.pause()

        cy.get('.action-checkboxes [type="checkbox"]').check('checkbox3')
        .should('be.checked')

        cy.pause()

        cy.get('.action-form').submit()
       .next().should('have.text', 'Your form has been submitted!')

       cy.pause()

        
    }) 
})