describe('LATIHAN ALERTS', () => {
   beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.url().should('include','/javascript_alerts') 
   })
   
    it('Alert Oke', () => {
    
    cy.on('window:alert', (str) =>  {
        expect(str).to.equal('I am a JS Alert')
    })
    
    cy.contains('Click for JS Alert')
    .click()

    cy.get('#result')
    .should('contain', 'You successfully clicked an alert')
   })

   it('confirm Oke', () => {
    
    cy.on('window:confrim', (str) =>  {
        expect(str).to.equal('I am a JS Confirm')
    })
    
    cy.contains('Click for JS Confirm')
    .click()

    cy.get('#result')
    .should('contain', 'You clicked: Ok')
   })
   
})
