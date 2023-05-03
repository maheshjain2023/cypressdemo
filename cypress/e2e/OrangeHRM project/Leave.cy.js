describe('leave', () => {

    it('Leave', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('OrangeHRM.json').then((data) => {
            cy.get('[name="username"]').type(data.username)
            cy.get('[name="password"]').type(data.password)
            cy.get('[type="submit"]').click()
            cy.wait(2000)

            cy.xpath('//div[@class="oxd-sidepanel-body"]/ul/li[3]').click()
            cy.wait(3000)
            cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click({ force: true })
            // cy.get('.oxd-icon.bi-calendar.oxd-date-input-icon').eq(0).click()
            cy.wait(2000)
            cy.get('.oxd-calendar-selector-month-selected').click()
            cy.wait(2000)
            cy.xpath('//ul[@role="menu"]//li[8]').click()
            
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
            cy.get('.oxd-calendar-selector-month-selected').eq(1).click()
            cy.xpath('//ul[@role="menu"]/li[6]').click()

        })

    })
})