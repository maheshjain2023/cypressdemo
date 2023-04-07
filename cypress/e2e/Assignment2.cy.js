describe('Goibibo',()=>{
      before('Before Hook',()=>{
        cy.visit('https://www.goibibo.com/')
      })

    it.skip('Flight Booking',()=>{

               // cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(0).type('B')
        // cy.wait(2000)
        // cy.contains("Mumbai, India (BOM)").click()

        cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(1).type('G')
        cy.wait(2000)
        cy.contains("Goa - Dabolim Airport").click()
    })

    it('Verify Label on the Home page',()=>{

        cy.get('.sc-1gt8xf5-2.fbBmhE').should('have.text',"Domestic and International Flights")

    })

    it('Verify Trains link is visible',()=>{

        cy.xpath('//div[@id="root"]//ul[@class="happy-nav"]/li[3]').should('have.text',"Trains")
    })

    it('Verify Hotels button',()=>{

        cy.xpath('//div[@id="root"]//ul[@class="happy-nav"]/li[1]').click()
        cy.get('.HomePagestyles__HomePageTitle-sc-s8m7jv-2.hEdjmN').should('have.text','Book Hotels & Homestays')
        
    })
})