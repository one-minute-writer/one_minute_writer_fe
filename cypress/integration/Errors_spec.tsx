import { aliasQuery } from "../utils/graphql-test-utils.js";

describe('Error Page', () => {
  it('should display error page with 404 error', () => {
     cy.visit('https://one-minute-writer.herokuapp.com/dash')
     .get('.error-page').should('exist')
     .get('.error-message').should('have.text', 'We\'re sorry, we\'re a bit of a mess right now. There seems to be an error! Feel free to head back to the dashboard. Or...hang out a while and type something up!')
  })

  it('should be able to go to user dashboard if there was an error', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/dash')
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "fetchUser", "fetchUser.json")
      })
      .get('.back-home-btn').click()
      .get('.welcome-user').should('have.text', 'Welcome Pythagoras')
  })
}) 