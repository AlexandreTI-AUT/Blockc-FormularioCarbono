/// <reference types="cypress" />

describe('SQL Injection', () => {

    before(() => {
        cy.visit('carbom-footprint/');
    });
    it('Verifica se SQL Injection altera o comportamento do formulário', () => {

        cy.get('#empresa')
            .should('be.visible')
            .clear()
            .type("' OR '1'='1'; --");


        cy.get('#tipoEmissao').select(1);
        cy.get('#quantidade').clear().type(100);

        cy.get('button').click();

        cy.location('pathname').should('eq', '/carbom-footprint/');


        cy.window().then((win) => {
            cy.spy(win.console, 'error').as('consoleError');
        });

        cy.get('@consoleError').should('not.be.called');

    });
});