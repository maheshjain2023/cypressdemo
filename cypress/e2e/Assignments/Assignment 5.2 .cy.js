describe('Window Handling And Iframes',()=>{
  it('Tab Handling',()=>{

  cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows')  //Parent Tab
  
  //remove target element so that new page will open in same tab
  cy.xpath('//div[@class="single_tab_div resp-tab-content resp-tab-content-active"]/a').invoke('removeAttr','target').click()   //clicking on link
  
  cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/#') 
  
  cy.wait(2000)

   cy.go('back')   //Go back to parent tab
  })
it.only('Handling Iframes',()=>{

  cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows')

  const iframe = cy.get('#iFrame')
  .its('0.contentDocument.body')
  .should(be.visible)
  .then(cy.wrap)
  cy.get('//div[@class="logo_img"]').eq(2).should('have.text','GlobalSQA')

})

})