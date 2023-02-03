/// <reference types="cypress" />

describe('Koala Resort Hotel ', ()=>{

    it ('Login Test', ()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        //1.Yol
       // cy.contains('Log in').click()
           
        //2.Yol
        // cy.contains('[class="nav-link"]','Log in').click()
       // cy.contains('li','Log in').click()

       //3.Yol
        cy.contains('log in',{matchCase:false}).click()
        //buyuk kucuk harf dikkate almadan metin olarak log in içeren web elementi arar.

      
          
        //ASSERT

        //1)have.text
        cy.get('#navLogon > .nav-link').should('have.text','Log in')
         //locate edilen yerde ki metinde 'Log in' yazıyor mu


        //2)cy.url()
        cy.url().should('include','Account/Logon')



        //3)be.visible
        cy.get('.row > .mb-4').should('be.visible')



        //4)cy.title()
        cy.title().should('eq','KoalaResortHotels - Log in')

        //5 include.text
        cy.get('#navLogon > .nav-link').should('include.text','Log in')

        //Toplam Link Sayısı
        cy.get('li a').should('have.length',29)

        //find(): Belirli bir html seçiminin alt elemanlarını bulmak için(parent-child)

          cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')

           
          //within()
          cy.get('div.categories').within(()=> {
            cy.get('a[href="/Rooms/320"]').click()

            //Parent: div.categories
            //Child: a[href="/Rooms/320"]
          })
    })
   
})
