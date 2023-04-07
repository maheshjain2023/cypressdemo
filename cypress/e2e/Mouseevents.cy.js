describe('Check Mouse events', () => {
  
    it('Verify Right Click', () => {
      cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
      cy.contains("right click me").rightclick()
      
   
      
  
    }),
    it('Verify Double Click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.contains("Double-Click Me To See Alert").dblclick()

  }),
  it('Verify Mouse hover demo', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')

})
  
})