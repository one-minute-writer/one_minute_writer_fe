import { aliasQuery, aliasMutation } from "../utils/graphql-test-utils.js";

describe('UserFlow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://picsum.photos/v2/list', [{ 
      author: 'Roberto Nickson',
      download_url: 'https://picsum.photos/id/1011/5472/3648'
    }])
  })
  
  it('should be able to get new inspiration image', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    .get('header').should('exist')
    .get('.menu') 
    .get('#start-writing-nav-button').click()
    .get('.img-inspo').should('exist').should('have.attr', 'src').should('include','https://picsum.photos/id/1011/5472/3648')  
    .intercept('GET', 'https://picsum.photos/v2/list', [{ 
      author: 'Roberto Nickson',
      download_url: 'https://picsum.photos/id/1011/5472/3648'
    }])
    .get('.new-img-btn').click()
    .get('.img-inspo').should('exist').should('have.attr', 'src').should('include','https://picsum.photos/id/1011/5472/3648')  
  })

  it('should be able to get new inspiration word', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('.word-inspo').should('exist')
      .get('.new-word-btn').click()
      .get('.word-inspo').should('exist')
})

  it('should be able to get new inspiration sound', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('.audio-box').should('exist')
      .get('.play-button').click().should('exist')
      .get('.pause-button').click().should('exist') 
  })

  it('should be able to choose a time to start writing', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'Target Time: 01:00')
    .get('.start-stop-btn').click()
    .get('.start-stop-btn').click()
    .get('.modal').should('exist')
    .get('.continue-writing-button').click()
    .get('.modal').should('not.exist')
  })
  it('should have a pop up a modal when time is up', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'Target Time: 01:00')
    .get('.start-stop-btn').click()
    .wait(60000)
    .get('.modal').should('exist')
    .get('.end-timer-message').should('have.text', 'Please input title and text to save')
  })

  it('should be able to enter a title', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('input').type('One minute writer')
    .get('input').should('have.value', 'One minute writer')
  })

  it('text area should be disabled if user has not chosen a time', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('textarea').should('be.disabled')
    .get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'Target Time: 01:00')
    .get('.start-stop-btn').click()
    .get('textarea').should('exist')
  })

  it('should be able to start writing in the text area', () => {
    cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    cy.get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'Target Time: 01:00')
    .get('.start-stop-btn').click()
    .get('textarea').type('Our story begins....')
    .get('textarea').should('have.text', 'Our story begins....')
  })
beforeEach(() => {
  cy.visit('https://one-minute-writer.herokuapp.com/writing-page')
    .intercept(
    "POST",
    "https://one-minute-writer-be.herokuapp.com/graphql",
    (req) => {
      aliasQuery(req, "fetchUser", "fetchUser.json")
    })
    .visit('https://one-minute-writer.herokuapp.com/dashboard')
  })

  it('should be able to save their writing', () => {
    cy.intercept('GET', 'https://picsum.photos/v2/list', [{ 
      author: 'Roberto Nickson',
      download_url: 'https://picsum.photos/id/1011/5472/3648'
    }])

    .get('#start-writing-nav-button').click()
    .get('.choose-time-btn').should('exist').click()
    .get('select')
    .select('60')
    .get('p').should('have.text', 'Target Time: 01:00')
    .get('.start-stop-btn').click()
    .get('input').type('One minute writer')
    .get('input').should('have.value', 'One minute writer')
    .get('textarea').type('Our story begins....')
    .get('textarea').should('have.text', 'Our story begins....')
    .get('.start-stop-btn').click()

    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasMutation(req, "createStory", "createStory.json")
      })

      .get('.save-writing-button').click() 
  })

  it('should be able to edit a story', () => {
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "fetchStory", "getStory.json")
      })
    cy.get('.edit-btn').first().click()
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('textarea').should('have.text', 'Dolores pariatur ea. Et ut omnis. Quia sequi autem. Ad deserunt ratione.')
      .get('input').should('have.value', 'The Doors of Perception')
      .get('.word-inspo').should('have.text', 'sed')
  })

  it('should be able to delete a story', () => {
    cy.get('.delete-btn').first().click()
    cy.intercept(
      "POST",
      "https://one-minute-writer-be.herokuapp.com/graphql",
      (req) => {
        aliasMutation(req, "deleteStory", "deleteStory.json")
      })
    .get('.title-display').first().should('have.text', 'The Waste Land')
    .get('.date-display').first().should('have.text', 'created: 04/03/2022')
    .get('.bodyText-display').first().should('have.text', 'eum')
    
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })
})

