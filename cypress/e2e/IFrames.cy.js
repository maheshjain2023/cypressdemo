describe('Handling Frames',()=>{

    it('Appraoch1',()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        let iframe=cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)

          iframe.clear().type('Welcome {ctrl+a}')
          cy.get('[aria-label="Bold"]').click()
    })
    it('Appraoch2- By using custom commands',()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')
           
           cy.getIFrame('#mce_0_ifr').clear().type('Welcome {ctrl+a}')

           cy.get('[aria-label="Bold"]').click()
    })
   


})