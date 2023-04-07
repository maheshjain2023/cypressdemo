describe('Goibibo',()=>{

    it('Flight Booking',()=>{

        cy.visit('https://www.goibibo.com/')
        // cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(0).type('B')
        // cy.wait(2000)
        // cy.contains("Mumbai, India (BOM)").click()

        cy.get(".sc-eLwHnm.hHxEGr.fswWidgetPlaceholder").eq(1).type('G')
        cy.wait(2000)
        cy.contains("Goa - Dabolim Airport").click()
    })
})