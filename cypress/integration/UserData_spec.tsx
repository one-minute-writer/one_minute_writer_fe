import { aliasQuery } from "../utils/graphql-test-utils.js";

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
      .get('.words-per-minute').should('have.text', '75')
      .get('.total-words').should('have.text', '1000')
  })
})
