describe('Admin Tab',()=>{
    it('Admin',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click();
        cy.xpath('//div[@class="oxd-sidepanel-body"]/ul/li[1]').click()
        cy.get(':nth-child(2) > .oxd-input').type('Mahesh')
        cy.get('.oxd-select-text--after').eq(0).click({force:true})
    })
})