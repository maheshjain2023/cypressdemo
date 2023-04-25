describe('Create User API',()=>{

    it('Get Method',()=>{

        cy.request({

            method: 'GET',
            url:'https://reqres.in//api/users?page=2'
            
        })


    })
    // cy.intercept({
    //     method:'POST',
    //   https://bam.nr-data.net/events/1/ae504947bb?a=551253935&sa=1&v=1216.487a282&t=Unnamed%20Transaction&rst=13415&ck=1&ref=https://www.goibibo.com/

    // })
})