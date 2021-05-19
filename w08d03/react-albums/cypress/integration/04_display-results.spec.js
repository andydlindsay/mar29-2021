describe('display results', () => {

  it('can load data from an api request', () => {
    // visit our app
    cy.visit('/');

    // to intercept all GET requests and respond with our hardcoded data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('searchResults');

    // find the input field and type in 'Daft Punk'
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // expect the spinner to be visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the ajax request to resolve, look for a particular album
    cy.wait('@searchResults')
      .get('main')
      .contains('Human After All')
      .should('be.visible');

    // uncheck the Explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure that the explicit album has been removed from the results
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
