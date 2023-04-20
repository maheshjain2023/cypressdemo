//TO automate Drag Drop feature
describe('Assignment 4.3',()=>{
    it('Drag and Drop',function(){
    cy.visit('https://demoqa.com/droppable')
    cy.get('#draggable').drag('#simpleDropContainer > #droppable',{force:true})
})
})