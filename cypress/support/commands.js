// cypress/support/commands.js

Cypress.Commands.add('preencherFormulario', (empresa, tipoEmissao, quantidade, mensagem) => {

    if (empresa !== undefined) {
        cy.get('#empresa')
            .should('be.visible')
            .clear()
            .type(empresa);
    }


    if (tipoEmissao !== undefined) {
        cy.get('#tipoEmissao')
            .should('be.visible')
            .select(tipoEmissao);
    }


    if (quantidade !== undefined) {
        cy.get('#quantidade')
            .should('be.visible')
            .clear()
            .type(quantidade);
    }



    cy.get('button')
        .should('be.visible')
        .should('be.enabled')
        .click();


    if (mensagem) {
        cy.get('.error-message')
            .should('be.visible')
            .should('have.text', mensagem);
    } else {
        cy.get('.success-message')
            .should('be.visible')
            .should('have.text', 'Com base na quantidade informada, podemos calcular os créditos de carbono necessários.');
    }
});