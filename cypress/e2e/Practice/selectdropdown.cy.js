
/// <reference types = "Cypress" />

//const { Runnable } = require("mocha")

describe('Handle Dropdown',()=>{


    it('Dropdown with select',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        // Cypress.on("uncaught:exception",(error,runnable)=>{
        //     return false
        // })

        cy.get('.globalcountrycode').select("American Samoa").should('have','American Samoa')
        
    })
})