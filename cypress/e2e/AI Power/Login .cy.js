describe('AI POWER Login',()=>{

    beforeEach('Visit URL',()=>{
        cy.visit('http://3.109.1.79:82/login')
    })
    it('Positive flow',()=>{
        
        cy.get('#email').type('atharva.user@gmail.com')
        cy.get('#password').type('abcd1234')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
        cy.get('.container-fluid>ul:nth-child(4)>li:nth-child(2)').click()
        cy.get('.px-0.border-0.bg-white.dropdown-item').click()
        cy.wait(2000)
    })

    it('Negative Test with blank email and Pwd',()=>{
        //cy.visit('http://3.109.1.79:82/login')
        cy.get('#email').click()
        cy.get('#password').click()
        cy.get('.invalid-feedback').eq(0).should('have.text','Email is mandatory')
        cy.get('.invalid-feedback').eq(1).should('have.text','Password is mandatory')
        cy.wait(3000)

    })

    it('Negative Test with blank email',()=>{
        // cy.visit('http://3.109.1.79:82/login')
        cy.get('#email').click()
        cy.get('#password').type('abcd1234')
        cy.get('.invalid-feedback').eq(0).should('have.text','Email is mandatory')
        cy.wait(3000)

    })
    it('Negative Test with blank Password',()=>{
       // cy.visit('http://3.109.1.79:82/login')
        cy.get('#password').click()
        cy.get('#email').type('atharva.user@gmail.com')
        cy.get('.invalid-feedback').eq(1).should('have.text','Password is mandatory')
        cy.wait(3000)

    })
})