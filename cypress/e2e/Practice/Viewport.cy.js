describe('Learning Viewport',()=>{
    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })
    it('Test on ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.log('ipad-2')
        cy.wait(2000)
    })
    it('Test on iphone-6',()=>{
        cy.viewport('iphone-6')
        cy.log('iphone-6')
        cy.wait(2000)
    })
    it('Test on macbook-16',()=>{
        cy.viewport('macbook-16')
        cy.log('macbook-16')
        cy.wait(2000)
    })
    it('Custom Resolution',()=>{
        cy.viewport(360,760)
        cy.log('Samsung-s10')
        cy.wait(2000)
    })
})