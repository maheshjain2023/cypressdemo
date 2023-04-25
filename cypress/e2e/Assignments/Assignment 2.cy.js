describe('Goibibo',()=>{
      before('Before Hook',()=>{
        cy.visit('https://www.goibibo.com/')
      })

      it('Verify Label on the Home page',()=>{

        cy.get('.sc-1gt8xf5-2.fbBmhE').should('have.text',"Domestic and International Flights")

    })
    
     
it("Flight booking ",()=>{
   // cy.visit("https://www.goibibo.com/")
    cy.viewport(1000,660)
    cy.get('.sc-clIzBv.bhRlrM.fswWidgetLabel').eq(0).click({force:true})
    cy.wait(7000)
    cy.get('[type="text"]').type('Pune',{force:true})
    cy.contains('Pune, India').click({force:true})
    cy.get('.sc-gsNilK.dImRia').click({force:true})
    cy.get('[type="text"]').type('Mumbai',{force:true})
    cy.contains('Mumbai, India').click({force:true})
    cy.xpath('//div[@class="DayPicker-Month"]/div[3]/div[3]/div[p=13]').click()
    cy.get("[class='fswFld__title']").should("have.text","13 Apr'23")
    cy.get(".sc-cvZCdy.iEJrkB").click({force:true})

 })

       

    it('Verify Trains link is visible',()=>{

        cy.xpath('//div[@id="root"]//ul[@class="happy-nav"]/li[3]').should('have.text',"Trains")
    })

    it('Verify Hotels button',()=>{

        //cy.xpath('//div[@id="root"]//ul[@class="happy-nav"]/li[1]').click()
        cy.xpath('//ul[@class="happy-nav"]/li[2]').click()
        cy.get('.HomePagestyles__HomePageTitle-sc-s8m7jv-2.hEdjmN').should('have.text','Book Hotels & Homestays')
        cy.xpath('//div[@data-testid="search-radio-button-wrap"]//input[@class="SearchBlockUIstyles__RadioButton-sc-fity7j-7 bnBFyA"]').click()
        cy.get('#downshift-1-input').type('Shimla')
        //cy.xpath('//ul[@id="downshift-1-menu"]/li[1]').click()
    })
})