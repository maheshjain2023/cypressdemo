const { forEach } = require("cypress/types/lodash")

//Access through Hook - for multiple it blocks
describe('Access Fixtures through hook',()=>{

    it('DatadrivenTest',()=>{

        cy.fixture('OrangeHRM2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           
        })
    })
    
})