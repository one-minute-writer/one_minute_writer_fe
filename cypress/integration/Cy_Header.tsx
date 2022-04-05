describe('Header/ Nav Bar', () => {
    beforeEach(()=> {
        cy.visit('https://one-minute-writer.herokuapp.com/dashboard') 
    })
    it('Should display the title, header, logo and nav bar', () => {
        cy.get('h1')
            .should('be.visible')
            .should('have.text', 'One Minute Writer')
        cy.get('img')
            .should('be.visible')
            .should('have.attr', 'alt')
        cy.get('header').should('be.visible')
        cy.get('nav').should('be.visible')
        cy.get('#dashboard-nav-button')
            .should('be.visible')
            // .should('have.css', 'color', 'rgb(161, 127, 26)')
        cy.get('#start-writing-nav-button').should('be.visible')
    })
})