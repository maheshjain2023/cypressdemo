describe('Users List',()=>{

    it('First API',()=>{

        cy.request({

            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            cy.log(res.body.data)
            expect(res.status).to.eq(200)

        })
    })
})