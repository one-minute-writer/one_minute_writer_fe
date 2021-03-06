import { aliasQuery } from "../utils/graphql-test-utils.js";

describe("User Dashboard", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "fetchUser", "fetchUser.json")
  })
    cy.visit('https://one-minute-writer.herokuapp.com/dashboard') 
})

  it('Should display the title, header, logo and nav bar', () => {
    cy.get('.logo').should('be.visible')
      .get('[alt="One Minute Writer"]').should('exist')
      .get('header').should('be.visible')
      .get('nav').should('be.visible')
      .get('#dashboard-nav-button').should('exist')
      .get('#dashboard-nav-button').should('have.css', 'color', 'rgb(161, 127, 26)')
      .get('#start-writing-nav-button').should('exist')
  })

  it('should be able display data on dashboard', () => {
    cy.get('.welcome-user').should('have.text', 'Welcome Pythagoras')
    .get('.words-per-min-display').should('have.text', ' Words Per Minute: ')
    .get('.word-statistics').should('have.text', 'You Have Written 75 Per Minute!')
    .get('.total-words-display').should('have.text', 'Total Words: ')
    .get('.total-word-statistics').should('have.text', 'You Have Written A Total Of 1000 words!')
  })

  it('should be able display users stories', () => {
    cy.get('.single-story').should('exist')
      .get('.title-display').first().should('have.text', 'Those Barren Leaves, Thrones, Dominations')
      .get('.date-display').first().should('have.text', 'created: 04/03/2022')
      .get('.bodyText-display').first().should('have.text', 'official')
      .get('.edit-btn').first().should('exist')
      .get('.delete-btn').first().should('exist')
  })
})
