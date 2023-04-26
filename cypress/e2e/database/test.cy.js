describe("",()=>{
    it("test db",()=>{
        cy.task("queryDb","select * from employee1").then((data)=>{
            cy.log(data)
            data.forEach((el)=>{
                //cy.log(el)
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                //cy.get('[name="first_name"]').type(el.firstname)
                cy.xpath('//div[@class="row"]/form/input[1]').type(el.firstname)
                cy.xpath('//div[@class="row"]/form/input[2]').type(el.lastname)
                cy.xpath('//div[@class="row"]/form/input[3]').type(el.email)
                cy.xpath('//div[@class="row"]/form/textarea').type(el.comments)
            })
             //cy.log(data)
        })
        //.then(count => {
        //     expect(count);
        //     cy.log('DB records count is => '+ count);
        //   });
    })
})