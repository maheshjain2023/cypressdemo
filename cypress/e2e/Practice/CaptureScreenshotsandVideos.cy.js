describe('My suite',()=>{
    it('Capture Screenshots and Videos',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.screenshot() //This will capture screen shot and give random name
        cy.wait(3000)
        cy.screenshot("Homepage")   //This will capture screen shot and give Homepage name
        cy.wait(3000)
        cy.get('.orangehrm-login-branding').screenshot('Logo')
    })
})