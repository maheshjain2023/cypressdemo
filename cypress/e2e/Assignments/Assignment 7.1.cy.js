
import Login from "../../PageObjects/LoginAssignment7.js"


describe('Ecommerce Demo Appplication',()=>{
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#customernav').click()
        const ln=new Login()

    ln.setUsername('rohitsharma')

    ln.setPassword('1234567890')

    ln.ClickSubmit()

    })
       
    it('T-Shirt',()=>{

        
         cy.wait(1000)
         cy.Purchase('Men','774','2')
        
        cy.get('#customer_menu_top').trigger('mouseover')
        cy.get('.fa.fa-lock.fa-fw').eq(0).click()

        })

    })
