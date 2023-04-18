describe('Mouse Operations', () => {
  
    it('Mouseover', () => {
    cy.visit('https://demo.opencart.com/')
    cy.get('.nav-link.dropdown-toggle').first().trigger('mouseover')
  
    })

    it.only('Right Click', () => {
          cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
          //cy.get('.context-menu-one.btn btn-neutral').trigger('contextmenu')
          cy.get('.context-menu-one.btn btn-neutral').rightclick()
  
    })

    it('Double Click', () => {
          
  
    })
    it('Drag and Drop using Plugin', () => {
          
  
    })

    it('Scrolling Page', () => {
          
  
    })
  })