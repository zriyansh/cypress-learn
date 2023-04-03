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

    it('check for aws cluster values for clicked cluster' , ()=>{
        cy.wait(2000)
        cy.contains('Cluster').click()
        cy.contains('sagar').click()

        cy.get('.flex-auto > .gap-x-20 > :nth-child(1) > :nth-child(1) > :nth-child(2)').should('exist') // cluster name
        cy.get('.gap-x-20 > :nth-child(1) > :nth-child(2) > .flex').should('exist') // region
        cy.get('.gap-x-20 > :nth-child(1) > :nth-child(3) > :nth-child(2)').should('exist') // cluster version

        cy.contains('amazonaws.com').should('exist')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .flex').should('exist') // nodes

        cy.contains('humalect-VPC').should('exist')        
        cy.get(':nth-child(4) > .gap-x-2 > .truncate').should('exist') // Public subnet
        cy.get(':nth-child(5) > .gap-x-2 > .truncate').should('exist') // private subnet
        cy.get('span[title="Domain not verified"]').should('exist') 

        // add new domain
        cy.contains('Add Domains').click()
        cy.get('.w-full').type('test1.humalect.dev')
        cy.contains('Add to cluster').click()   

    })
   

})