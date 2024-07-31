// cypress/e2e/app.cy.ts
describe('App', () => {
  it('should update the color when sliders are changed', () => {
    cy.visit('/');
    cy.get('[data-cy=red-slider]').invoke('val', 255).trigger('change');
  });
  it.only('should update the color when sliders are changed', () => {
    cy.visit('/');
    cy.get('[data-cy=green-slider]').invoke('val', 200).trigger('change');
  });
});
