describe('Check UI elements', () => {
    Cypress.on('uncaught:exception', () => false)



    it('Checking Radio Buttons', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')

        cy.xpath('//div[@class="nxt-btn"]').click()
        cy.wait(2000)
        cy.xpath('//div[@class="pre-btn"]').click()
        // cy.get('[id*=how-select]').select('Podcast').should('have.value','Podcast') 
        cy.get('[name="firstname"]').type("Mahesh")
        cy.get('[name="lastname"]').type("Jain")
        cy.get('[value="Male"]').check()
        cy.get('[type="radio"]').eq(7).click()
        cy.xpath('//table/tbody/tr[5]/td[2]//input[@type="text"]').type("10 April 2023")
        cy.get('[value="Manual Tester"]').check()
        cy.get('[name="photo"]').selectFile("/home/josh/Downloads/cypressdemo/cypress/fixtures/cartoon.jpeg")
        cy.get('[type="checkbox"]').check(['RC','Selenium IDE'])
        // cy.get('[value="RC"]').check()
        // cy.get('[value="Selenium IDE"]').check()
        // cy.get('[value="Selenium IDE"]').uncheck()
        cy.get('[name="continents"]').select('Australia')
        cy.get('[name="selenium_commands"]').select('Switch Commands')
        cy.get('[name="submit"]').click()

  
    })
  })