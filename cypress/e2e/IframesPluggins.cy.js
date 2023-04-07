import 'cypress-iframe'
describe('Cypress Iframe using Plugin',()=>{

    it.only('Appraoch2- By using custom commands',()=> {

        cy.visit('https://the-internet.herokuapp.com/iframe')
           
           cy.frameLoaded('#mce_0_ifr') //Load the frame
           cy.iframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}')

           cy.get('[aria-label="Bold"]').click()
    })
})