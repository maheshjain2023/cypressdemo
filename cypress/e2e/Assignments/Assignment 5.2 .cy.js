describe('Window Handling And Iframes',()=>{
  it.only('Tab Handling',()=>{

  cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows')  //Parent Tab
  
  //remove target element so that new page will open in same tab
  cy.xpath('//div[@class="single_tab_div resp-tab-content resp-tab-content-active"]/a').invoke('removeAttr','target').click()   //clicking on link
  
  cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/#') 
  
  cy.wait(2000)

   cy.go('back')   //Go back to parent tab
  })
it('')

})