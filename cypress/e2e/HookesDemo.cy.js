
describe('MyTestSuite',()=>{
    before(()=>{

        cy.log("**** Launch Application ****")
    })

    after(()=>{

        cy.log("**** Close Application ****")
    })

    beforeEach(()=>{

        cy.log("**** Login ****")
    })

    afterEach(()=>{

        cy.log("**** Logout ****")
    })

    it('Search',()=>{

         cy.log("**** Searching ****")
    })

    it('Advance Search',()=>{

         cy.log("**** Advance Searching ****")     
        
    })

    it('Listing Products',()=>{

        cy.log("**** Listing Products ****")   
    })
})