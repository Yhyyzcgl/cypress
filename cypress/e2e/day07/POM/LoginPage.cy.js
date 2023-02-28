class LoginPage{

    getUserNameBox(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.userName)
    }

    getPasswordBox(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.passWord)
    }

    getLoginButton(){
        return cy.get('.MuiButton-label')
    }
    getWelcomeText(){
        return cy.get('.header__nav > :nth-child(1) > .header__lineOne')
        .should('contain.text', 'Welcome')
    }
    getHeader(){
        return cy.get('.header__nav')
    }

}
export default LoginPage