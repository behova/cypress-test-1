///<reference types="Cypress"/>

//add todo
//remove todo
//toggle todo item
//todo count is updated

describe('App Todo', () => {
    beforeEach(() => {
        cy.login()
    })
    it('user can add, check and delete todos', () => {
        //add pack boxes Todo
        cy.findByRole('textbox', {  name: /title/i})
            .type('pack boxes')
        cy.findByRole('button', {  name: /submit/i}).click()
        cy.findByText(/pack boxes/i).should('exist')
        cy.wait(1000)

        //check todo count
        cy.findByText(/total todos: 1/i).should('exist')

        //add clean laundry Todo
        cy.findByRole('textbox', {  name: /title/i})
            .type('clean laundry')
        cy.findByRole('button', {  name: /submit/i}).click()
        cy.findByText(/pack boxes/i).should('exist')
        cy.findByText(/clean laundry/i).should('exist')
        cy.wait(1000)

        //check todo count
        cy.findByText(/total todos: 2/i).should('exist')

        //check off todo items
        cy.findByRole('checkbox', {  name: /pack boxes/i}).click()
        //check selected todo count
        cy.findByText(/selected todos: 1/i).should('exist')
        cy.wait(1000)

        cy.findByRole('checkbox', {  name: /clean laundry/i}).click()
        //check selected todo count
        cy.findByText(/selected todos: 2/i).should('exist')
        cy.wait(1000)
        
        //remove pack boxes Todo
        cy.get('[data-cy="todo-pack boxes"]')
            .within(() => {
                cy.findByRole('button', {  name: /remove/i}).click()
            })
        cy.findByText(/pack boxes/i).should('not.exist')
        //check todo count
        cy.findByText(/total todos: 1/i).should('exist')
        cy.wait(1000)

        //remove clean laundry Todo
        cy.get('[data-cy="todo-clean laundry"]')
            .within(() => {
                cy.findByRole('button', {  name: /remove/i}).click()
            })
        cy.findByText(/clean laundry/i).should('not.exist')
        //check todo count
        cy.findByText(/total todos: 0/i).should('exist')
        cy.wait(1000)


    })

    // it('add todo', () => {
    //     cy.findByRole('textbox', {  name: /title/i})
    //     .type('TODO1')
    //     .type('{enter}')
    //     cy.findByText(/todo1/i).should('exist')
    // })

    // it.only('remove todo', () => {
    //     cy.findByRole('textbox', {  name: /title/i})
    //     .type('TODO1')
    //     .type('{enter}')
    //     cy.findByRole('textbox', {  name: /title/i})
    //     .type('TODO2')
    //     .type('{enter}')
    //     cy.wait(2000)

    //     cy.findByText(/todo1/i).should('exist')
    //     cy.findByText(/todo2/i).should('exist')
        
    //     cy.get('[data-cy="todo-TODO1"]')
    //     .within(() => {
    //         cy.findByRole('button', {  name: /remove/i}).click()
    //     })

    //     cy.findByText(/todo1/i).should('not.exist')

    // })
    

    
})