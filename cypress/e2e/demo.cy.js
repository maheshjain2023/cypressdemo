
import Login from "../PageObjects/LoginPage2"

describe('Locators', () => {
    // Cypress.on('uncaught:exception',(error,runnable)=>{
    //  return false
    // })

    before('Loading Data',function(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.fixture("OrangeHRM").then((data)=>{
        this.data = data
    })

  })
  
    it.skip('CSS locators', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','opensource')
      cy.title().should('eq','OrangeHRM')
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admion123")
    cy.get('[type="submit"]').click()
    
  
    })

    //Using POM

    it.skip('CSS locators', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','opensource')
      //cy.title().should('eq','OrangeHRM')
     const ln=new Login()

    ln.setUsername("Admin")
    ln.setPassword("admin123")
    ln.ClickSubmit()

  
    })

     //Using POM with fixtures

     it.only('CSS locators', function(){
      
      cy.url().should('include','opensource')
      //cy.title().should('eq','OrangeHRM')
      
        const ln=new Login()

        ln.setUsername(this.data.username)
        ln.setPassword(this.data.password)
        ln.ClickSubmit()

      })
     

  
    })
  