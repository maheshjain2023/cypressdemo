describe('Analytice',()=>{
    it('Analytics',()=>{
        cy.visit('http://3.109.1.79:82/login')
        cy.login('atharva.user@gmail.com','abcd1234')
        cy.get('.nav-link.active').click()
        cy.xpath('//ul[@class="ml-auto navbar-nav"]/li[1]').click()
        cy.get('[value="year"]').click()
        cy.get('.w-100 > div.mx-3 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click()
        cy.wait(3000)
        cy.get('#react-select-2-option-2').click()
        cy.get('#react-select-3-input').click()
        cy.wait(2000)
        cy.get('#react-select-3-option-4').click()
        cy.get('.modal-body > :nth-child(3) > .css-b62m3t-container > .css-1s2u09g-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()
        
        cy.get('#react-select-4-input').click()
        cy.get('react-select-4-option-5').click()
    })
})