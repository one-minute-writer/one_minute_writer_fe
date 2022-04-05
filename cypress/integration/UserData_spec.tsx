import { aliasQuery, aliasMutation } from "../utils/graphql-test-utils.js";

describe("User Dashboard Queried Data", () => {
  beforeEach(() => {
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "fetchUser", "fetchUser.json")
  })
})

  it('should be able to get username on dashboard', () => {
    cy.visit("http://localhost:4000/")
      .get('.username-display').should('have.text', 'Welcome, Pythagoras')
  })
})

// it(`It should display user's name and user's statistics`, () => {     
//   cy.get('[data-testid=user-greeting]')
//       .should('have.text', 'Welcome, plutarch')
//   cy.get('[data-testid=user-stats]')
//       .should('be.visible')
//    cy.get('[data-testid=words-per-minute]')
//       .should('have.text', 1932)
//    cy.get('[data-testid=total-words]')
//       .should('have.text', 23243)
// })
// it(`Should display the user's stories`, () => {
//   cy.get('[data-testid=stories-section]')
//       .should('be.visible')
//       .should('have.length', 2)
//   cy.get('[data-testid=single-story]').first()
//     .get('[data-testid=story-title]').should('be.visible')
//     .get('[data-testid=story-date]').should('be.visible')
//     .get('[data-testid=story-body]').should('be.visible')
// })