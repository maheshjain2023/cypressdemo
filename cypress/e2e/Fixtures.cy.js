describe('My test File',()=>{

    it('Fixture Demo Test',()=>{
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     cy.fixture('OrangeHRM').then ((data)=>{

        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)
           cy.wait(5000)

     }) //File Extension is oprtional
     
    })
})