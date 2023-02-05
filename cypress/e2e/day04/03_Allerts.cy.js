/// <reference types="cypress" />

describe('Allerts', ()=>{


    it ('Allert Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.wait(3000)

        cy.get(':nth-child(1) > button').click()

        //Cypress otomatik olarak Allert mesajlarına onay verir

        cy.get('#result').should('have.text','You successfully clicked an alert')


        
    })

    it('Accept Alert Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.get(':nth-child(2) > button').click()

        //2 secenek var iptal ve tamam.Cypress otomatik tamam butonuna tıkladı

        cy.get('#result').should('have.text','You clicked: Ok')

        
    })



    it('Dismiss Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.get(':nth-child(2) > button').click()
        //cypress otomatık tıkladı

        cy.on('window:confirm',()=>{
            return false
            //on() methodu ile iptali onaylama işlemi yapılır window sayesinde
            //browserda açılan pencerelerin kontrolu için kullanılır
        })

        cy.get('#result').should('have.txt', 'You clicked: Cancel')


    })

   
    it.only('Alert Text', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.window()//pop up pencereleri kontrol ediyoruz
        .then(($windowsElement) => {
            //$windowsElement -> promt'a bilgi girer
            cy.stub($windowsElement, 'prompt').returns('Cypress')
            cy.get(':nth-child(3) > button').click()
        })

        cy.get('#result').should('have.text', 'You entered: Cypress')
    })

   
})
