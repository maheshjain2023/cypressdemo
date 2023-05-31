describe('Cypress Alerts',()=>{
    // 1) Javascript alert : it will have some text & 'Ok' button

    it('JavaScript Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
            
        })
        //Alert window will automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    // 2) Javascript Confirm Alert:It will have some text with 'OK' & 'Cancel' button
    it.only('JavaScript Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            
        })
        //Alert window will automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

     

    // 3) Javascript Prompt Alert: It will have some text with a text box for user input alongwith 

    // 4) Authenticated Alert
    
})