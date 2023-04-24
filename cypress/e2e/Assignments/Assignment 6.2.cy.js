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
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[5]/select/option[4]').click({force:true})
        cy.xpath('//div[@class="elementor-widget-container"]/table/tbody/tr[3]/td[5]/select').select('Sedan')
        cy.wait(2000)
        cy.xpath('//table[@class="tg"]/tbody/tr[3]/td[6]/input').type('Cricket')
        cy.get('#demo').click()
        cy.contains('Details updated successfully.')
    })
})