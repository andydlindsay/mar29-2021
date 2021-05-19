describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('inputField');
  });

  it('can type into an input field', () => {
    cy.get('@inputField')
      .type('Pavarati', { delay: 150 })
      .should('have.value', 'Pavarati');
  });

  it('can handle backspace', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 250 })
      .should('have.value', 'Bee Gees');
  });

});