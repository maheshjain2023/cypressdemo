
import 'cypress-file-upload'

describe('File Upload',()=>{

    it('Single File Upload',()=>{
      cy.visit('https://the-internet.herokuapp.com/upload')
      cy.get('#file-upload').attachFile('Test1.pdf');
       cy.get('#file-submit').click()
       cy.wait(5000)
    })
    //Single File upload without Plugin here we use select file function
    it('Single File upload without Plugin',()=>{

            cy.visit('https://the-internet.herokuapp.com/upload')
            cy.get('#file-upload').selectFile('../cypressdemo/cypress/fixtures/Test1.pdf')
             cy.get('#file-submit').click()
             cy.wait(5000)
             cy.xpath('//div[@class="example"]// h3').should('have.text','File Uploaded!')

    })

    it('File Upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Test1.pdf',fileName:'Myfile.pdf'});
         cy.get('#file-submit').click()
         cy.wait(5000)
         cy.xpath('//div[@class="example"]// h3').should('have.text','File Uploaded!')
      })

    it('File Upload-Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('.dz-success-mark.dz-clickable').attachFile('Test1.pdf',{subjectType:'drag-n-drop'});
        cy.wait(5000)
    })

    it.only('Multiple Files Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Test1.pdf','Invoice.pdf'])
        cy.wait(5000)
        cy.contains('Files You Selected:') 

    })

    it('File Upload-Shadow Dom',()=>{
       cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')


    })
})