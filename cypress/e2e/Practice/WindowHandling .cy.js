describe('Window Handling And Iframes',()=>{
    it('Tab Handling approach1 ',()=>{
  
    cy.visit('https://the-internet.herokuapp.com/windows')  //Parent Tab
    
    //remove target element so that new page will open in same tab
    cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()   //clicking on link
    
    cy.url().should('include','https://the-internet.herokuapp.com/windows') 
    
    cy.wait(2000)
  
     cy.go('back')   //Go back to parent tab
    })
  
  
    it('Tab Handling Approach 2',()=>{
  
    cy.visit('https://the-internet.herokuapp.com/windows')  //Parent Tab
    
    //remove target element so that new page will open in same tab
      cy.get('a[href="/windows/new"]').then((e)=>{
  
      let url = e.prop('href')
  
      cy.visit(url)
  
      cy.url().should('include','https://the-internet.herokuapp.com/windows') 
    
      cy.wait(2000)
  
      cy.go('back')   //Go back to parent tab
  
    })
  
    })
  
  })