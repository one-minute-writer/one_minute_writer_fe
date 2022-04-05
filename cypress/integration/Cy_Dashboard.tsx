import {
    GET_SINGLE_USER
} from '../../src/Queries';

import { aliasQuery, aliasMutation } from '../../src/grapql-test-utils'

describe('Dashboard Page', () => {
    beforeEach(() => {
        cy.intercept(
            'POST', 
            'https://one-minute-writer-be.herokuapp.com/graphql',
            (req) => {
                aliasMutation(req, 'GET_SINGLE_USER', 'UserData.json');
            }
        ).visit('https://one-minute-writer.herokuapp.com/')

        // cy.intercept({

        //     method: 'POST',
        //     url: '/',
        //     headers: {
        //         'x-gql-operation-name': 'fetchUser'
        //     },
        // }, { fixture: 'UserData.json' })
    })
    it(`It should display user's name and user's statistics`, () => {
        // cy.request({
        //     url: '/',
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application.json' 
        //     },
        //     body: {
        //         query: GET_SINGLE_USER
        //     },
        //     failOnStatusCode: false
        // })
        cy.get('[data-testid=user-greeting]')
            .should('have.text', 'Welcome, plutarch')
        // cy.get('[data-testid=user-stats]')
        //     .should('be.visible')
        // cy.get('[data-testid=words-per-minute]')
        //     .should('have.text', 1932)
        // cy.get('[data-testid=total-words]')
        //     .should('have.text', 23243)
    })
    // it(`Should display the user's stories`, () => {
    //     cy.get('[data-testid=stories-section]')
    //         .should('be.visible')
    //         .should('have.length', 2)
    //     cy.get('[data-testid=single-story]').first()
    //         .get('[data-testid=story-title]').should('be.visible')
    //         .get('[data-testid=story-date]').should('be.visible')
    //         .get('[data-testid=story-body]').should('be.visible')
    // })
})