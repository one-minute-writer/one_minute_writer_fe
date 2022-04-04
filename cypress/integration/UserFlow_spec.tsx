describe('UserFlow', () => {
  it('should be able to get new inspiration image', () => {
    cy.intercept('GET', 'https://one-minute-writer-be.herokuapp.com/graphql', { 
      fixture: 'UserData.json' 
    })
    // .intercept('GET', 'http://localhost:4000')
      .visit('http://localhost:4000', {
      
      })
      
      cy.get('header').should('exist')
      .get('.menu') 
      .get('#start-writing-nav-button').click()
      .get('.img-inspo').should('exist')
      .get('.new-img-btn').click()
      .get('.img-inspo')   
  })

  it('should be able to get new inspiration word', () => {

  })
  it('should be able to get new inspiration sound', () => {

  })
  it('should be able to choose a time to start writing', () => {

  })
  it('should be able to enter a title', () => {

  })
  it('should be able to start writing in the text area', () => {

  })
  it('should be able to save their writing', () => {

  })
  it('should be able to go to the dashboard and see their writing', () => {

  })
})

