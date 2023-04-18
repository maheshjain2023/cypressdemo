describe('Lastmile Automation',()=>{

    it('Login Form',()=>{

        cy.visit('https://stage.radius-sc.com/admin/login')
        cy.get('#spree_user_email').type('mahesh.yambal@joshsoftware.com')
        cy.get('#spree_user_password').type('1234567890')
        cy.get('.btn.btn-primary').click(
            
        )
    })
})