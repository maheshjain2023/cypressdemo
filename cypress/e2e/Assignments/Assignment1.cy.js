describe('Lastmile Automation', () => {

    it('Login Form', () => {
        //Login to Application

        cy.visit('https://stage.radius-sc.com/admin/login')
        cy.get('#spree_user_email').type('mahesh.yambal@joshsoftware.com')
        cy.get('#spree_user_password').type('1234567890')
        cy.get('.btn.btn-primary').click()
        cy.get('.header-actions.page-actions.inline-menu').should('be.visible')
        //Create New User 

    })
    it('Create User', () => {
        cy.get('.fa.fa-user.icon_link.with-tip').click();  //Click on Users Link
        cy.get('#admin_new_user_link').click();    //Click on 'Add New User' Link
        cy.get('#user_email').type('Salesperson101@josh.com')  //Enter Email ID of user
        cy.get('#user_kiosk_name').type('Happy Snacks Centre')  //Enter Kiosk Name
        cy.get('#user_first_name').type('Deepak')   // Enter First Name of User
        cy.get('#user_last_name').type('Chahar')     //Enter Last Name of the user
        cy.get('#user_phone_number').type('5134174712') //Enter Phone number of the user
        cy.get('#user_country_code').type('+91')
        cy.get('#user_spree_role_sales_person').check() //Select role for the new user
        cy.get('#user_spree_stock_locations_Warehouse').check()
        cy.get('#user_password').type('1234567890')  // Set the Password
        cy.get('#user_password_confirmation').type('1234567890') //Retype same password for the Confirmation
        cy.wait(4000)
        cy.contains('Cancel').click()
        cy.wait(2000)
    })

})