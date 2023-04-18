
describe('Drop down list',()=>{

    // beforeEach('URL',()=>{
    //     cy.visit('https://formstone.it/components/dropdown/demo/')
    // })


   it('Dropdown example',()=>{
   
    cy.get('#demo_basic-dropdown-selected').click()
    cy.contains('Two').click({force: true})
    //cy.get('.fs-dropdown-item.fs-dropdown-item_selected:nth-child(2)').click({force: true})

   })

   it('Group Drop down list',()=>{

    cy.get('#demo_groups-dropdown-selected').click()
    cy.xpath('//div[@class="fs-scrollbar-content"]//span[@class="fs-dropdown-group"][3]').contains('Eight').click()    
   })
   
   it.skip('dd3',()=>{

    cy.get('#demo_label-dropdown-selected').click()
    cy.wait(2000)
    cy.get('div.fs-scrollbar-content').eq(6).contains('Colorado').click()
   })
   })

   it.skip('No Theme',()=>{
    cy.visit('https://formstone.it/components/dropdown/demo/')
    cy.wait(3000) 
    cy.get('#demo_basic_2-dropdown-selected').click()
    cy.xpath('//div[@class="fs-dropdown-options fs-scrollbar-element fs-scrollbar fs-scrollbar-active"]/div[2]/button[5]').click()
   })
   it.skip('Jump Sites',()=>{
    cy.visit('https://formstone.it/components/dropdown/demo/')
    cy.get('#demo_external-dropdown-selected').click()
    cy.contains('CNN News').click()
   })

   it.only('Multiple',()=>{

    cy.visit('https://formstone.it/components/dropdown/demo/')
    cy.get('#demo_multiple-dropdown > .fs-dropdown-options > .fs-scrollbar-content > [data-value="6"]').click();
   })