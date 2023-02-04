/// <reference types="cypress" />

describe('HoverOver', ()=>{

    it ('Test Case', ()=>{
     cy.visit('https://amazon.com/')

     cy.get('#icp-nav-flyout').trigger('mouseover')

     cy.wait(3000)

     cy.contains('Change country/region.').click()

     cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})
        
    })

 
})
