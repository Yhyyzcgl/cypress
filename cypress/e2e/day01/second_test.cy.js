/// <references types="cypress"/>

context('My Second Test', ()=>{
    beforeEach('It will work before every test',()=>{
        cy.visit('/')
    })

    it ('URL Test', ()=>{
    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/')
        
    })


    it ('Title Test', ()=>{
        cy.title().should('include','Google')
        cy.title().should('equal','Google')

        
    })

    it.skip ('Search Test', ()=>{
        cy.get('.gLFyf').type('Cypress.io{enter}')
        
    })

    it.skip ('Search Test', ()=>{
        cy.get('.gLFyf', {timeout:3000}).type('Cypress.io{enter}')

        
    })

    it('Click', ()=>{
        cy.get('.gb_e').click()
        
    })
   
   
   
})
