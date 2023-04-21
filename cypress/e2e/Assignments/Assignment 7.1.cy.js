
import Login from "../../PageObjects/LoginAssignment7.js"

describe('Ecommerce Demo Appplication',()=>{
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#customernav').click()
    })
    it('Login User',()=>{
       
        //cy.get('#customernav').click()

        const ln=new Login()

        ln.setUsername('rohitsharma')

        ln.setPassword('1234567890')

        ln.ClickSubmit()

        cy.get('#customer_menu_top').trigger('mouseover')
        cy.get('.fa.fa-lock.fa-fw').eq(0).click()
             
    })
    it.only('T-Shirt',()=>{

        const ln=new Login()

        ln.setUsername('rohitsharma')

        ln.setPassword('1234567890')

        ln.ClickSubmit()

        cy.get('#filter_keyword').eq(0).click().type('men')

        cy.get('.button-in-search').click()

        //cy.get('//div[@class="col-md-3 col-sm-6 col-xs-12"][3]').click()
        
        cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click()
        
        cy.get('#option350').select('Light Blue  (997728 In Stock)')
        cy.get('#product_quantity').clear().type('2')

        //cy.get('.total-price').eq(0).should('have.text','$64')
        cy.get('.productpagecart').click()
        //cy.get('.maintext').should('include','SHOPPING CART')
        cy.get('#cart_checkout1').click()
        //cy.get('.maintext').should('eq',' Checkout Confirmation')
        cy.get('#customer_menu_top').trigger('mouseover')
        cy.get('.fa.fa-lock.fa-fw').eq(0).click()

        })

    })
