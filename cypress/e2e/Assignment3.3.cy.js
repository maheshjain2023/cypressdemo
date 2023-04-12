describe('Assignment 3.3',()=>{

    it('Autosuggestion Drop down list',()=>{

        cy.visit("https://www.google.com/")
        cy.wait(2000)
        cy.get('[id="APjFqb"]').type("Cypress Automation")
        cy.wait(2000)
        cy.contains("cypress automation tutorial").click()
    })
})