/// <reference types="cypress" />

describe('Selectors Examples ', ()=>{


    it.skip ('Css Selectors', ()=>{
        
        cy.visit('https://amazon.com/')

        //By Tag Name
        cy.get('input')
        

        //2)By 
        cy.get('#twotabsearchtextbox')


        //3)By Class
        cy.get('nav-input nav-progressive-attribute')


        //4)By Attribute
        cy.get("input[type='text']")

        //5)By 2 Attribute

        cy.get("[type='text'][id='twotabsearchtextbox']")



        
    })

    it ('XPath', ()=>{

        cy.visit('https://www.google.com')

        //6) By Xpath
        cy.xpath("//a[@class='gb_d']").should('include.text', 'Gmail')
        // /// <reference types="cypress-xpath" />


        // xpath() algılanmaz ise 1. satıra üsteki kodu yazabilirsiniz
    
        // require('cypress-xpath')
        // yukarıdaki kodu e2e.cy.js dosayasına ekleyeceğiz

        // cy.xpath("//a[@class='gb_d']").click({multiple: true }) bu şekilde hata verse bile click yapıyor




 

        
    })
   
})
