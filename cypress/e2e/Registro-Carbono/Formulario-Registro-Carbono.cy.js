/// <reference types="cypress" />

import { faker } from "@faker-js/faker/locale/pt_BR";

describe('Formulário registro de pegada de carbono', () => {
  beforeEach(() => {
    cy.visit('carbom-footprint/');
  });

  it('Preencher formulário pegada de carbono com sucesso', () => {
    cy.preencherFormulario(
      faker.company.name(),
      faker.number.int({ min: 1, max: 10 }),
      faker.number.int({ min: 1, max: 1000 }).toString()
    );
  });

  it('Validar campo Empresa deve ser obrigatório', () => {
    cy.preencherFormulario(
      undefined,
      faker.number.int({ min: 1, max: 10 }),
      faker.number.int({ min: 1, max: 1000 }).toString(),
      'Por favor, insira o nome da empresa.'
    );
  });

  it('Validar campo Tipo de Emissão deve ser obrigatório', () => {
    cy.preencherFormulario(
      faker.company.name(),
      undefined,
      faker.number.int({ min: 1, max: 1000 }).toString(),
      'Selecione um tipo de emissão.'
    );
  });

  it('Validar campo Quantidade Estimada deve ser obrigatório', () => {
    cy.preencherFormulario(
      faker.company.name(),
      faker.number.int({ min: 1, max: 10 }),
      undefined,
      'Informe a quantidade estimada.'
    );
  });
});