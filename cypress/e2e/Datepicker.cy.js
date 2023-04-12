describe('DatePicker Demo',()=>{

    it('Date',()=>{
     //cy.visit('https://demo.automationtesting.in/Datepicker.html')
     cy.visit('https://demoqa.com/automation-practice-form')
     cy.get('.form-control.react-datepicker-ignore-onclickoutside').click()
     cy.get('.react-datepicker__month-select').click()

     //cy.get('//div[@class="react-datepicker__month"]//div[@class="react-datepicker__week"]').click()
     //cy,get('.react-datepicker__year-select').click()


    })
})