//const { indexOf } = require("cypress/types/lodash")

describe('Handling Tables',()=>{

     beforeEach('Login',()=>{
       cy.visit('https://demo.opencart.com/admin/index.php')
       cy.get('#input-username').type('demo')
       cy.get('#input-password').type('demo')
       cy.get('.btn.btn-primary').click()
       //cy.get("//button[@class='btn-close']").click()
       cy.get('.btn-close').click()
       //cy.get('//li/a[@class="parent"]').click()
       cy.xpath('//nav/ul/li[6]').click()
       cy.get('#collapse-5.collapse>li').eq(0).click()

       

     })

     it('Check Number of Rows and Columns',()=>{
     //cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
     cy.get('.table-responsive tbody>tr').should('have.length','10')
     cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7')


     })

     it('Check cell data from specific row and column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(8)>td:nth-child(3)").contains('neha@gmail.com')



     })

     it('Read all the rows and column data in the first page',()=>{

       cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index , $rows)=>{

            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                   cy.log($col.text())

                })
            })

        })
      })
   let Totalpages;
     it.only('Pagination',()=>{
        cy.get('.col-sm-6.text-end').then( (e)=>{

            let mytext=e.text()    // Showing 1 to 10 of 11784 (1179 Pages)
            Totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
             cy.log("Total number of Pages=",+Totalpages)
             
             for(let p=1;p<=Totalpages;p++)
             {
                 if(Totalpages>1)
                 {
                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                    cy.wait(500)
                 }
             }
       
            })

      })
})