/// <reference types="cypress" />


describe('My First Test', ()=>{




    it ('URL Test', ()=>{

    
        cy.visit('https://www.google.com/')

        cy.url().should('include','google')
        ///test
    })

    it ('Title Test', ()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')

        cy.title().should('eq','Google')
        

        
    })
   
})
