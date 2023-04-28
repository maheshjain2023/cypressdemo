describe('leave',()=>{

    it('Leave',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('OrangeHRM.json').then ((data)=>{
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        cy.wait(2000)
        
        cy.xpath('//div[@class="oxd-sidepanel-body"]/ul/li[3]').click()
        cy.wait(2000)
        cy.get('.oxd-icon.bi-calendar.oxd-date-input-icon').eq(0).click()
        
        cy.get('.oxd-icon.bi-calendar.oxd-date-input-icon').eq(1).click()
  

        })
        
    })
})