describe('tests for Cypress', () => {

  it('works', () => {
    expect(true).to.equal(true);
  });

  it('can visit the home page', () => {
    cy.visit('http://localhost:8765');
  });

});
