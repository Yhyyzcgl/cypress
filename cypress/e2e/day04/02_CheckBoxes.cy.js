/// <reference types="cypress" />

describe('CheckBoxes', () => {

    it('Single CheckBox', () => {
        cy.visit('http://automationpractice.com/index.php')

        //cy.get('.sf-with-ul').first().click()
        //first(): Birden fazla web elementi var ise birinciyi seç demek

        cy.get('.sf-with-ul').eq(0).click()
        //first() = eq(0)

        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked') -> Tıklı olmadığı test etti

        //TIKLA
        cy.get('#layered_category_4').check().should('be.checked')

        //TIKLMAYI KALDIR
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
    })

    it('All CheckBoxes 1', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        //Bütün checkbox lara tıkla
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)

        //TIKLAMALARI KALDIR
        cy.get("input[type='checkbox']").uncheck()
    })

    it('All CheckBoxes 2', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        //1. kutuya tıkla
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')

        //5. kutuya tıkla
        cy.get("input[type='checkbox']").eq(4).check().should('be.checked')

        //12. kutuya tıkla
        cy.get("input[type='checkbox']").eq(11).check().should('be.checked')

        //TIKLAMALARI KALDIR
        cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')
        //uncheck(): Tıklamayı KaLdırır
        //should('NOT.be.checked'): Tıklanın kaldırıldığı ASSERT eder.
    })


    it.only('All CheckBoxes 2', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        cy.get("input[type='checkbox']").click({ multiple: true })
        // click() -> tek bir web elemenmte tıklar
        // click({ multiple: true }) bu şekilde tüm web elementlere tıklar

        cy.get("input[type='checkbox']").parent().should('have.class', 'checked')
        //19 checkboxsı tıklanmış mı diye assert etti.

    })

})