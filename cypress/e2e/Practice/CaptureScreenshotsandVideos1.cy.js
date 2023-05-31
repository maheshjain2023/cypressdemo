describe('My suite',()=>{
    it('Capture Screenshots and Videos',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    //Automatically capture screenshots and videos on failure only when we execute it from CLI
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admion123")
    cy.get('[type="submit"]').click()
    cy.get('.oxd-topbar-header').should('have.text','board')
    //Execute the file from terminal use npx cypress run --spec file name
    })
})