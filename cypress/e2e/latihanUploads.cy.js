describe('tes latihan 1', () => {
    it('Uploads', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.url().should('include', '/upload')

        cy.get('#file-upload')
        .selectFile('cypress/fixtures/TEST_CYPRES.pdf')

        cy.get('#file-submit')
        .click()

        cy.get('h3')
        .should('contain','File Uploaded!')

        cy.get('#uploaded-files')
        .should('contain','TEST_CYPRES.pdf')
        
    }) 
})