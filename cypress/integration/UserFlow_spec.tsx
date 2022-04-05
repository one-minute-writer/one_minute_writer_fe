describe('UserFlow', () => {
  
  it('should be able to get new inspiration image', () => {
    cy.intercept('GET', 'https://picsum.photos/v2/list', [{ 
      author: 'Roberto Nickson',
      download_url: 'https://picsum.photos/id/1011/5472/3648'
    }])
    .visit('https://one-minute-writer.herokuapp.com/writing-page')
    .get('header').should('exist')
    .get('.menu') 
    .get('#start-writing-nav-button').click()
    .get('.img-inspo').should('exist').should('have.attr', 'src').should('include','https://picsum.photos/id/1011/5472/3648')  
    .get('.new-img-btn').click()
    .intercept('GET', 'https://picsum.photos/v2/list', [{ 
      author: 'Roberto Nickson',
      download_url: 'https://picsum.photos/id/1011/5472/3648'
    }])
    .get('.img-inspo').should('exist').should('have.attr', 'src').should('include','https://picsum.photos/id/1011/5472/3648')  
  })
  
  beforeEach(() => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
  })

  it('should be able to get new inspiration word', () => {
    cy.get('.word-inspo').should('exist')
    // .get('.new-word-btn').click()
    // .get('.word-inspo').should('exist')
})

  // it('should be able to get new inspiration sound', () => {
    
  // })

  it('should be able to choose a time to start writing', () => {
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'target: 01:00')
    .get('.start-stop-btn').click()
    .get('.start-stop-btn').click()
    .get('.modal').should('exist')
    .get('.continue-writing-button').click()
    .get('.modal').should('not.exist')
  })
  it('should have a pop up a modal when time is up', () => {
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'target: 01:00')
    .get('.start-stop-btn').click()
    .wait(60000)
    .get('.modal').should('exist')
    .get('.end-timer-message').should('have.text', 'Your time is up! Would you like to keep writing or save your work?')
  })

  it('should be able to enter a title', () => {
    cy.get('input').type('One minute writer')
    .get('input').should('have.value', 'One minute writer')
  })

  it('text area should be disabled if user has not chosen a time', () => {
    cy.get('textarea').should('be.disabled')
    .get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'target: 01:00')
    .get('.start-stop-btn').click()
    .get('textarea').should('exist')
  })

  it('should be able to start writing in the text area', () => {
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'target: 01:00')
    .get('.start-stop-btn').click()
    .get('textarea').type('Our story begins....')
    .get('textarea').should('have.text', 'Our story begins....')
  })

  it('should be able to save their writing', () => {
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'target: 01:00')
    .get('.start-stop-btn').click()
    .get('input').type('One minute writer')
    .get('input').should('have.value', 'One minute writer')
    .get('textarea').type('Our story begins....')
    .get('textarea').should('have.text', 'Our story begins....')
    .get('.start-stop-btn').click()
    .get('.save-writing-button').click()
    .intercept('GET', 'https://one-minute-writer-be.herokuapp.com/graphql')
    .visit('https://one-minute-writer.herokuapp.com/dashboard')
  })
  // it('should be able to go to the dashboard and see their writing', () => {
    
  // })
})

