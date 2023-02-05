/// <reference types="cypress" />

describe('Suggested Elements', ()=>{


    it ('Test Case', ()=>{

        cy.visit('http://automationpractice.com/index.php')

        cy.get('#search_query_top').type('dress')

        cy.wait(9000)

        cy.get('.ac_results').contains('Blouse').click()

        cy.get('h1').should('be.visible')

        
    })

 
   
})
