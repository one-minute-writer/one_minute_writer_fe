Cypress.Commands.add('requestUserInfo', operationName => {
    cy.request({
        url: '/',
        method: 'GET',
        headers: {
            'Content-Type': 'application.json' 
        },
        body: {
            query: operationName
        },
        failOnStatusCode: false
    });
})