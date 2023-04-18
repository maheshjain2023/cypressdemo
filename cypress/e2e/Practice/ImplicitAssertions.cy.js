describe('Assertion Demo',()=>{

    it('Implicit assertion',()=>{
        //should ,and

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.url().should('include','orangehrmlive.com')
       cy.url().should('contain','orangehrmlive.com')
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
    it('use of single url for multiple statements',()=>{
        //instead of using same method multiple times we can use .should for every statement 

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.url().should('include','orangehrmlive.com')
               .should('contain','orangehrmlive.com')
               .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   

    })

    it('Use of and keyword',()=>{
    
    //instead of using same method multiple times we can use and for every statement 

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','orangehrmlive.com')
              .and('contain','orangehrmlive.com')
              .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    })

    it('Use of not keyword',()=>{
    
        //use of not keyword to test negative assertions 
    
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.url().should('not.include','apple')
                  .and('not.contain','google')
                  .and('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/12345')
      
        })
        it('Test verify title of the page',()=>{
            cy.title().should('eq','OrangeHRM')
            .and('include','Orange') 
            .and('contain','HRM')  
        })

        it('Verify Image is present or Not',()=>{

          cy.get('.orangehrm-login-branding > img').should('be.visible')
          cy.get('.orangehrm-login-branding > img').should('exist')

          cy.get(".oxd-input.oxd-input--active").eq(0).type("Admin").should('have.value',"Admin")
          //cy.get("oxd-input oxd-input--active").eq(1).should('have.value',"Admin")

          // cy.get('[name="username"]').type("Admin")
          // cy.get('[name="username"]').should('have.value',"Admin")


        })



})