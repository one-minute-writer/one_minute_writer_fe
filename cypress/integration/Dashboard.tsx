import { createYield } from "typescript"

describe('Dashboard Page', () => {
    beforeEach(()=> {
        cy.intercept('GET', 'http://localhost:3000/', { fixture: 'UserData.json' })
        cy.visit('http://localhost:3000/') 
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
        cy.get('[data-testid=dashboard-nav-button]')
            .should('be.visible')
            .should('have.css', 'active')
        cy.get('[data-testid=start-writing-nav-button]').should('be.visible')
    })
})