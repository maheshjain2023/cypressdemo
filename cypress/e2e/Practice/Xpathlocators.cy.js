describe('Locators', () => {
    // Cypress.on('uncaught:exception',(error,runnable)=>{
    //  return false
    // })
  
    it('CSS locators', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','opensource')
      cy.title().should('eq','OrangeHRM')
      cy.xpath('(//input[@placeholder="Username"])[1]').type("Admin")
      cy.xpath('//input[@placeholder="Password"]').type('admin123')
    cy.xpath('//button[normalize-space()="Login"]').click()
     
    })
  })