describe('Locators', () => {
  
    it('CSS locators', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admion123")
    cy.get('[type="submit"]').click()
    
  
    })
  })