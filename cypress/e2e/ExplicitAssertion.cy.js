describe('Assertions', () => {
    
  
    it('Explicit Assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','opensource')
      cy.title().should('eq','OrangeHRM')
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('[type="submit"]').click()

    let ExpName="berisik tai"
    cy.get('.oxd-userdropdown-name').then( (x)=> {

      let actName=x.text()
      //BDD Style
      expect(actName).to.equal(ExpName)

      //TDD style
      assert.equal(ExpName,actName)

    } )
    
  
    })
  })