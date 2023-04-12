describe('Locators', () => {
  
    it('CSS locators', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admion123")
    cy.get('[type="submit"]').click()
    
  
    cy.get('[name="username"]').type("Admin1")
    cy.get('[name="password"]').type("admion1234")
    cy.get('[type="submit"]').click()
    
    })
  })