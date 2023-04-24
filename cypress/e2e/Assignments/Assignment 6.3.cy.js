describe('Assignment 6.3',()=>{
    it('File Upload',function(){
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.contains('File Upload Test')
        cy.contains('Send this file')
        cy.get('[name="userfile"]').click()
        cy.get('[name="userfile"]').selectFile('../cypressdemo/cypress/fixtures/Test1.pdf')
        //cy.contains('Test1.pdf')
        cy.get('[type="submit"]').click()
                  
    })

}) 