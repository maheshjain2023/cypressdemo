describe('Assignment3.2',()=>{
    it('Select Drop down',()=>{

        cy.visit('http://www.facebook.com')
        cy.get('._42ft._4jy0._6lti._4jy6._4jy2.selected._51sy').click()
        cy.get('[name="firstname"]').type("Mahesh")
        cy.get('[name="lastname"]').type("Jain")
        cy.get('[name="reg_email__"]').type("1234567890")
        cy.get('[name="reg_passwd__"]').type('Josh@2024')
        cy.get('[name="birthday_day"]').select("15")
        //cy.contains("15").click()
        cy.get('[name="birthday_month"]').select("May")
        //cy.contains("may").click()
        cy.get('[id="year"]').select("2001")
        //cy.contains("2001").click()
        cy.xpath('//span[@class="_5k_2 _5dba"][2]').click()
        cy.get('[name="websubmit"]').click()
    })
})