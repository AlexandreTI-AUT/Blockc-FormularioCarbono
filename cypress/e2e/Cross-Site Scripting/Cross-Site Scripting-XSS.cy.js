/// <reference types="cypress" />

describe('SQL Injection', () => {

    before(() => {
        cy.visit('carbom-footprint/');
    });
    it('Cross-Site Scripting (XSS) - Teste de Injeção', () => {

        const xssPayload = "<img src=x onerror=alert('XSS')>";

        cy.get('#empresa')
            .should('be.visible')
            .clear()
            .type(xssPayload);


        cy.get('#tipoEmissao').select(1);
        cy.get('#quantidade').clear().type(100);


        cy.get('button').click();


        cy.on('window:alert', (txt) => {
            expect(txt).to.contain('XSS');
        });


        cy.get('#empresa').then(($el) => {
            expect($el).not.to.have.value(xssPayload);
        });
    });




});