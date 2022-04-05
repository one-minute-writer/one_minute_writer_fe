import { aliasQuery } from "../utils/graphql-test-utils.js";

describe("User Dashboard", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "fetchUser", "fetchUser.json")
  })
    cy.visit('http://localhost:4000') 
})

  it('Should display the title, header, logo and nav bar', () => {
    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'alt')
      .get('header').should('be.visible')
      .get('nav').should('be.visible')
      .get('#dashboard-nav-button').should('exist')
      .get('#dashboard-nav-button').should('have.css', 'color', 'rgb(161, 127, 26)')
      .get('#start-writing-nav-button').should('exist')
  })

  it('should be able to get username on dashboard', () => {
    cy.get('.username-display').should('have.text', 'Welcome, Pythagoras')
    .get('.words-per-minute').should('have.text', '75')
    .get('.total-words').should('have.text', '1000')
  })
})
