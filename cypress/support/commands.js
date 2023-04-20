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
/// <reference types = "Cypress" />


 require('@cypress/xpath')

 Cypress.Commands.add('getIFrame',(iframe)=> {
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
 })

 //require('@4tw/cypress-drag-drop')
 import '@4tw/cypress-drag-drop'
//import cypressConfig from '../../cypress.config'
 
 //Custom Command for clicking on the link using label

Cypress.Commands.add('clickLink',(label)=>{
   cy.get('a').contains(label).click()
})

//Overwriting contains() function
// Cypress.Commands.overwrite('contains',(originalFn,subject,filter,text,options = {})=>{
//    if(typeof text === 'object'){
//       options = text
//       text = filter
//       filter = undefined
//    }
//    options.matchcase = false
//    return originalFn(subject,filter,text,options)

// })

Cypress.Commands.add('login',(Username,Password)=>{
   
   cy.get('[name="username"]').type(Username)
   cy.get('[name="password"]').type(Password)
   cy.get('[type="submit"]').click()
   

})