describe('Create User API',()=>{

    it('Post Method',()=>{

        cy.request({

            method: 'POST',
            url:'https://reqres.in/api/users',
            body:{

                "name": "morpheus",
                "job": "leader"
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name', 'morpheus')
            expect(res.body).has.property('job','leader')

        })

    })
})