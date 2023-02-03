/// <reference types="cypress" />


describe('Koala Resort Hotel ', ()=>{

    it ('Login in Testi', ()=>{

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        //1.Yol
       // cy.get('#navLogon > .nav-link').click()
       
       //2.Yol
       cy.contains('Log in').click()
       //contains() : DOM'da login in textini bul.Metni Text olarak arar.

       cy.url().should('include','Account/Logon')

       cy.get('#UserName').type('Manager')

       //1.Yol
       // cy.get('#Password').type('Manager1!')
       //cy.get('#btnSubmit').click()

       //2.Yol
       cy.get('#Password').type('Manager1!{enter}')

    })

    it ('', ()=>{

        
    })
   
})
