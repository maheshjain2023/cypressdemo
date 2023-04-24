//Fixtures
describe('Assignment 4.2',()=>{

    it('DatadrivenTest',()=>{

        cy.fixture('OrangeHRM2.json').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata)=>{
                cy.get('[name="username"]').type(userdata.username).should('not.be.null')
                cy.get('[name="password"]').type(userdata.password).should('not.be.null')
                cy.get('[type="submit"]').click()
    
                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                    .should('have.text',userdata.expected)

                    cy.get('.oxd-userdropdown-name').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    
                }
                else
                {
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
                    .should('have.text',userdata.expected)
                }
              
            })
        })
    })
    
})