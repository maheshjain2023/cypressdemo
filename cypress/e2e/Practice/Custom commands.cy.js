describe('Custom Command',()=>{

   // Cypress.on('uncaught:exception', () => false)
    it('Handling Links',() => { 
        cy.visit('https://demo.nopcommerce.com/')
        
        //Without using Custom Command
        //cy.xpath('//div[@class="page-body"]/div[4]/div[2]/div[2]/div/div[2]/h2/a').click()
        
        //Using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.xpath('//div[@class="product-name"]/h1').should('have.text','Apple MacBook Pro 13-inch')

    })
    // it.only('Overwriting Existing command',()=>{
    //     cy.visit('https://demo.nopcommerce.com/')

    //     cy.clickLink("APPLE MACBOOK PRO 13-inch")
    //     cy.wait(2000)
    //     cy.xpath('//div[@class="product-name"]/h1').should('have.text','Apple MacBook Pro 13-inch')

    // })
})