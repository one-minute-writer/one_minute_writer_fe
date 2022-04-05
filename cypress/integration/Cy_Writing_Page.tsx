import { createYield } from "typescript"

describe('Writing Page', () => {
    beforeEach( () => {
        cy.visit('http://localhost:4000/writing-page')
    } )
    it('show the header', () => {
      cy.get('header').should('be.visible')
    })
    it('should have an inspiration section', () => {
        cy.get('.inspirations').should('be.visible')
        cy.get('.image-box').should('be.visible')
            .get('img').should('be.visible')
            .get('.new-img-btn').should('be.visible')
        cy.get('.word-box').should('be.visible')
            .get('.word-inspo').should('be.visible')
            .get('.new-word-btn').should('be.visible')
        cy.get('.audio-box').should('be.visible')
            .get('.new-audio-btn').should('be.visible')
    }) 
    
  })