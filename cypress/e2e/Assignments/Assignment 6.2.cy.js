describe('Assignment 6.2', () => {
    Cypress.on('uncaught:exception', () => false)
    it('Handling Web Tables', () => {

        cy.visit('http://www.dezlearn.com/webtable-example/')

        cy.xpath('//table[@class="tg"]/tbody/tr').should('have.length', 7)
        cy.xpath('//table[@class="tg"]/tbody/tr/th').should('have.length', 6)
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[1]').should('have.text', 'Mayur Deshmukh')
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[3]/input').check()
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[4]/input').check()
        // cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[5]').click({force:true})
        // cy.get(':nth-child(3) > :nth-child(5) > select').click()
        cy.wait(2000)
        cy.get(".elementor-widget-container select").eq(0).select("Sedan", { force: true })
        //cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[5]/select/option[4]').click({force:true})
        cy.wait(2000)
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[6]/input').type('Cricket')
    })
})