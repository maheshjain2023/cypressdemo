describe('Lastmile',()=>{
    it('Login',()=>{
        cy.visit('https://stage.radius-sc.com/admin/login')
        cy.get('#spree_user_email').type('mahesh.yambal@joshsoftware.com')
        cy.get('#spree_user_password').type('1234567890')
        cy.get('.btn.btn-primary').click()
        cy.xpath('//div[@class="admin-nav-sticky"]/nav/ul/li[1]').click()
        cy.get('#q_created_at_gt').click()
        cy.get('.flatpickr-prev-month').eq(0).click({force:true})
        cy.xpath('//div[@class="flatpickr-innerContainer"]/div/div/div/span[15]').eq(1).click({force:true})
        cy.get('#q_created_at_lt').click()
        cy.wait(4000)
        cy.xpath('//div[@class="flatpickr-innerContainer"]/div/div/div/span[15]').eq(2).click({force:true})
        cy.wait(4000)
 
    })
})