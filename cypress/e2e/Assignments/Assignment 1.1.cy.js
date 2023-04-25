//Assignment 1 : Practice Locators on Amazon.com
describe('Locators', () => {

    

    it.only('Sign in to Josh Intranet application', () => {

        cy.visit('/')

        cy.get('[role="menuitem"]').invoke('attr','target','_self')
        cy.wait(2000)
        cy.get('[role="menuitem"]').click({ force: true })
        
        cy.origin("https://accounts.google.com/",()=>{

        cy.get("#identifierId").type("mahesh.yambal@joshsoftware.com")
        cy.get('.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.qIypjc.TrZEUc.lw1w4b').click()
        cy.get('#password').type('Josh@2023')
        cy.contains('Next').click();
        
        // cy.get('.dropdown-toggle.user-name').click()
        //     cy.get('.test').trigger('mouseover')
        //     cy.get('.menu-font').click()
        //     cy.get('.icon-plus.add-timesheet-icon').click()
        //     cy.get('.select.required.active_project_ids').select('Upskill/CrossSkill training')
        //     cy.get('.select.optional.duration_select').select('8 hours 30 mins')
        //     cy.get('#user_time_sheets_attributes_0_description').type('cypress Learning')
        //     cy.get('[type="submit"]').click()
        })

        //     
        // })
        
            

    })

    it.skip('Fill Timesheet', () => {
        cy.get('.dropdown-toggle.user-name').click()
        cy.get('.test').trigger('mouseover')
        cy.get('.menu-font').click()
        cy.get('.icon-plus.add-timesheet-icon').click()
        cy.get('.select.required.active_project_ids').select('Upskill/CrossSkill training')
        cy.get('.select.optional.duration_select').select('8 hours 30 mins')
        cy.get('#user_time_sheets_attributes_0_description').type('cypress Learning')
        cy.get('[type="submit"]').click()

    })
})