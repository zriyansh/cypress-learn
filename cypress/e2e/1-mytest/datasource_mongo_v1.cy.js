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

    it('created a mongo v1 db', () =>{
        cy.wait(2000)
        cy.contains('Datasources').click()
        cy.contains('Create New Datasource').click()

        let x = Math.floor((Math.random() * 1000) + 1);
        var ds_name = "priyansh-test" + x + "mongov1 ds" + x;
        cy.get('input[name="releaseName"]').type(ds_name)
        // cy.get('#react-select-11-input').click().type('{enter}')

        /* ==== Generated with Cypress Studio ==== */
        cy.get('.w-1\\/2 > .h-22 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click(); // select cluster dropdown

        cy.get('#react-select-2-option-0').click(); // selects a cluster value 

        cy.get('.w-full > .h-22 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click(); // select datasource dropdown

        cy.get('#react-select-3-option-1').click(); // click on mongo as an option

        cy.get(':nth-child(2) > :nth-child(2) > .h-22 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click(); // Select version dropdown

        cy.get('#react-select-4-option-0').click(); // selcts 1st version

        cy.get('.flex.flex-grow > .h-22 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click(); // select color lable dropdown

        cy.get('#react-select-5-option-0').click(); // selects first color


        cy.get(':nth-child(2) > :nth-child(2) > .items-center > .w-full').clear('pe'); // clears any garbage value
        cy.get(':nth-child(2) > :nth-child(2) > .items-center > .w-full').type('pers-1-name'); // existing persistence name
        cy.get(':nth-child(1) > :nth-child(3) > .items-center > .w-full').clear('p'); // clears any garbage value
        cy.get(':nth-child(1) > :nth-child(3) > .items-center > .w-full').type('password'); // root user password
        // cy.get('.gap-x-4 > .bg-hm-black').click();
        /* ==== End Cypress Studio ==== */
    })


})