describe('Assignment 6.1',()=>{

    it('DatePicker',()=>{
      cy.visit('https://www.goibibo.com/')
      cy.get(':nth-child(3) > .sc-gGCDDS > .sc-faUpoM').click()
      cy.get(':nth-child(2) > .DayPicker-Caption > div').should('have.text','May 2023')
      cy.get('.DayPicker-NavButton--next').click()
      cy.xpath('//div[@class="DayPicker-Month"]/div[3]/div[2]/div[p=11]').click()
      cy.get('.fswTrvl__done').click()
    })
})