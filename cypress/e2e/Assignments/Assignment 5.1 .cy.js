describe('Assignment 5.1',()=>{
    it('Custom Commands',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.login('Admin','admin123')
         cy.get('.oxd-userdropdown-tab').click()
         cy.xpath('//ul[@class="oxd-dropdown-menu"]/li[4]').click()
    })

    it('Relogin',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
       cy.get('.oxd-userdropdown-tab').click()
      //cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
      cy.xpath('//ul[@class="oxd-dropdown-menu"]/li[4]').click()
    })
    })


