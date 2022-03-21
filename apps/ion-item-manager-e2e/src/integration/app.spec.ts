describe('ion-item-manager', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the landing page', () => {
    cy.contains('Item Manager');
  });

  it('shows 5 items products', () => {
    cy.get('ion-card').should('have.length', '5');
  });
});
