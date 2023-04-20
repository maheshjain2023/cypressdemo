describe('Assignment 6.1',()=>{

    it('DatePicker',()=>{
      cy.visit('https://www.goibibo.com/')

      cy.get('.sc-clIzBv.bhRlrM.fswWidgetLabel').eq(0).click({force:true})
      cy.wait(1000)
      cy.get('[type="text"]').type('Pune',{force:true})
      cy.contains('Pune, India').click({force:true})
      cy.get('.sc-gsNilK.dImRia').click({force:true})
      cy.get('[type="text"]').type('Mumbai',{force:true})
      cy.contains('Mumbai, India').click({force:true})


      cy.get(':nth-child(3) > .sc-gGCDDS > .sc-faUpoM').click({force:true})
      cy.get(':nth-child(2) > .DayPicker-Caption > div').should('have.text','May 2023',{force:true})
      cy.get('.DayPicker-NavButton--next').click({force:true})
      cy.xpath('//div[@class="DayPicker-Month"]/div[3]/div[2]/div[p=11]').click({force:true})
      cy.get('.fswTrvl__done').click({force:true})
      cy.wait(1000)

      cy.get(':nth-child(1) > .sc-jWUzzU > :nth-child(3)').click({force:true})
      cy.xpath('//div[@class="sc-kYHfwS fxKxux"]/ul/li[1]').click({force:true})
      cy.get('.sc-gjNHFA.eqHvKO').click({force:true})

      //cy.xpath('//div[@class="sc-ehCJOs dOUNaZ"]/div[4]').click({force:true})
    //   cy.xpath('//div[@class="DayPicker-Caption"]/div').should('have.text','June 2023')
     
    })
})