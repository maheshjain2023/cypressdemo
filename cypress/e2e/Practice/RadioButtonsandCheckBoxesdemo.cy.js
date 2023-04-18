describe('Check UI elements', () => {
  
    it('Checking Radio Buttons', () => {
      cy.visit('https://www.sugarcrm.com/au/request-demo/')

      
      cy.get('[id*=how-select]').select('Podcast').should('have.value','Podcast') 
    //   cy.get('[#month]').select('Jan').should('have.value','1') 
    //   cy.get('[#year]').select('2023').should('have.value','2023') 
    
  
    })
  })