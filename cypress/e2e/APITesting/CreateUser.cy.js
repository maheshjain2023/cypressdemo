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
    // cy.intercept({
    //     method:'POST',
    //   https://bam.nr-data.net/events/1/ae504947bb?a=551253935&sa=1&v=1216.487a282&t=Unnamed%20Transaction&rst=13415&ck=1&ref=https://www.goibibo.com/

    // })
})