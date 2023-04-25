describe('Create User API',()=>{

    it('Get Method',()=>{

        // cy.request({
        //     method: 'GET',
        //     url:'https://reqres.in//api/users?page=2'
            
        // })
        cy.visit('https://reqres.in/')
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
             cy.log(response.body.data[0].email)
        })
        cy.intercept('GET','https://reqres.in/api/users?page=2',{statusCode : 201}
        ).as('Waitfor')
        cy.get('[data-id="users"]').click()
        cy.wait('@Waitfor')
        


})
    
})