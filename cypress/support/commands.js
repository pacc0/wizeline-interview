// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login  from "../pageObjects/login_page";

const login = new Login()

Cypress.Commands.add('userLogin', (username,password) => {
    cy.visit("login")
    cy.get(login.login_email_field)
        .type(username)
    cy.get(login.login_password_field)
        .type(password)
    cy.get(login.login_button)
        .click()
    cy.url()
        .should('eql', login.login_assertion_url);

})

Cypress.Commands.add('inexistentUserLogin', () => {
    cy.fixture('login').then((data) => {
        cy.visit("login")
        cy.get(login.login_email_field).type(data.sadPath.email)
        cy.get(login.login_password_field).type(data.sadPath.password)
        cy.get(login.login_button).click()
    })
    cy.url()
        .should('eql', Cypress.config().baseUrl + 'login')
    cy.get(".login-form > form > p")
        .should('exist')
        .and('contain','Your email or password is incorrect!')
})