describe('API intercept',function(){
    it('API intercept',()=>{

        cy.visit('https://dummyapi.io/explorer')
        cy.intercept({

            path:'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept =>{

            expect(intercept.response.body.limit).equal(10)
        })

    })

    it('Mock API',()=>{

        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit : 20,Name:'Test'}).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept =>{
        expect(intercept.response.body.limit).equal(20)
        expect(intercept.response.body.Name).equal('Test')
        

    })
})
it('Data Driven Mock API Response using Intercept',()=>{

    cy.visit('https://dummyapi.io/explorer')
    cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{fixture:'OrangeHRM.json'}).as('comments')
    cy.get('.flex > :nth-child(5)').click()
    cy.wait('@comments').then(intercept =>{
    expect(intercept.response.body.username).equal('Admin')
    expect(intercept.response.body.password).equal('admin123')

})
})

})