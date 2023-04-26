describe("",()=>{
    it("test db",()=>{
        cy.task("queryDb","select * from Contactus").then((res)=>{
             cy.log(res)
        })
        //.then(count => {
        //     expect(count);
        //     cy.log('DB records count is => '+ count);
        //   });
    })
})