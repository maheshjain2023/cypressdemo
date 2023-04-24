//import { Assertion } from "chai"

describe('Assignment 4.1', () => {
    Cypress.on('uncaught:exception', () => false)



    it('Assertions', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
      //Implicit Assertions

        cy.url().should('include','tutorialspoint')
                .and('eq','https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')

        
       cy.url().should('include','www.tutorialspoint.com')
               .should('contain','tutorialspoint')
               .should('eq','https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')

        //Explicit Assertion
        let ExpName="Webdriver Commands Example"
    cy.get('#mainContent > :nth-child(7)').then( (x)=> {

      let actName=x.text()
      //BDD Style
      expect(actName).to.equal(ExpName)

      //TDD style
      assert.equal(ExpName,actName)

    } )

        cy.get('#mainContent > :nth-child(1)').should('have.text','Selenium - Automation Practice Form')
        cy.get('[name="firstname"]').type("Mahesh").should('have.value','Mahesh')
        cy.get('[name="lastname"]').type("Jain").should('have.value','Jain')
        cy.get('[value="Male"]').check().should('be.checked')
        cy.get('[type="radio"]').eq(7).click().should('be.checked')
        cy.xpath('//table/tbody/tr[5]/td[2]//input[@type="text"]').type("10 April 2023")
        cy.get('[value="Manual Tester"]').check().should('be.checked')
        cy.get('[name="photo"]').selectFile("./cypress/fixtures/cartoon.jpeg")
        cy.get('[type="checkbox"]').check(['RC','Selenium IDE'])
        // cy.get('[value="RC"]').check()
        // cy.get('[value="Selenium IDE"]').check()
        // cy.get('[value="Selenium IDE"]').uncheck()
        cy.get('[name="continents"]').select('Australia')
        cy.get('[name="selenium_commands"]').select('Switch Commands')
        cy.get('[name="submit"]').click()
  
    })
  })