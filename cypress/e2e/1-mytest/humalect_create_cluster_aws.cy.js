/// <reference types="cypress" />

describe('login humalect', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://console.dev.humalect.com/public/user/login')
    cy.contains('Forgot password ?').should('exist')
    cy.contains('Sign Up').should('exist')
    cy.contains('Login with google').should('exist')
    cy.get('form > :nth-child(1) > .w-full').type('priyansh@humalect.com')
    cy.get(':nth-child(2) > .w-full').type('Password@123')
    cy.get('button').contains('Login').click()
  })

  it.only('creates an aws cluster', () => { 
    cy.wait(2000)
    cy.contains('Cluster').click()
    cy.contains('Create New Cluster').click()

    let x = Math.floor((Math.random() * 1000) + 1);
    var cluster_name = "priyansh-test" + x + "cluster" + x;

    cy.get('.items-center > .w-full').type(cluster_name)
    cy.get('input[name="domains.0.name"]').type('test.humalect.dev')
    cy.contains('Mumbai').click()
    cy.get('#react-select-4-input').click().type('{enter}')
    cy.contains('Cluster Details').click()
    cy.contains('None').click()
    cy.get('input[name="nodeSize"]').should('contain.value', '1')
    cy.get('input[name="diskSize"]').should('contain.value', '40')
    cy.contains('T3a medium').click()
    // cy.contains('Create Cluster').click()
  })
})


