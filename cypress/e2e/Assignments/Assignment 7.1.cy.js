
import Login from "../../PageObjects/LoginAssignment7.js"


describe('Ecommerce Demo Appplication',()=>{
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#customernav').click()
        cy.get('.heading2').eq(1).should('have.text','Returning Customer')
        cy.get('.heading4').eq(1).should('have.text','I am a returning customer.')
        const ln=new Login()

    ln.setUsername('rohitsharma')

    ln.setPassword('1234567890')

    ln.ClickSubmit()

    })
       
    it('T-Shirt',()=>{

        
         cy.wait(1000)
         cy.get('.logo').should('be.visible')
         cy.Purchase('Men','774','2')
        cy.get('.maintext').should('have.text',' Checkout Confirmation')
        cy.get('#customer_menu_top').trigger('mouseover')
        //cy.get('.fa.fa-lock.fa-fw').eq(0).should('have.text','Not Rohit? Logoff')
        cy.get('.fa.fa-lock.fa-fw').eq(0).click()

        })

    })
