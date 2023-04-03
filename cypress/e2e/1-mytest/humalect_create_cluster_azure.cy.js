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

  it.only('creates an azure cluster', () => { 
    cy.wait(2000)
    cy.contains('Cluster').click()
    cy.contains('Create New Cluster').click()
    // studio generated
    // cy.get(':nth-child(4) > span.flex-auto > .flex-auto > .flex-1 > .items-center > .flex-col').click();
    
    // cy.get('.flex-col > div.flex > .rounded-tl-lg').click();
    
    // drop down select of AWZ/AZURE
    cy.get(':nth-child(1) > .gap-x-4 > :nth-child(1) > .h-22 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click();

    cy.get('#react-select-3-option-1').click();

    // cy.get('.items-center > .w-full').clear('p');
    cy.get('.items-center > .w-full').type('priyansh-test-101012');
    // cy.get('.w-1\\/4 > .w-full').clear('t');
    cy.get('.w-1\\/4 > .w-full').type('test.humalect.dev');
    cy.get('.bg-hm-light-blue > .capitalize').click();
    cy.contains('Central India').click();
    cy.contains('Cluster Details').click()
    cy.get('#Standard_A2_v2').check();
    // cy.contains('Create Cluster').click()
    /* ==== End Cypress Studio ==== */
  });
})