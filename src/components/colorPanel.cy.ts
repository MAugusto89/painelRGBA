// cypress/e2e/colorPanel.cy.ts
describe('ColorPanel', () => {
  it('should display the correct color', () => {
    cy.mount(<ColorPanel red={255} green={0} blue={0} alpha={1} />);
    cy.get('div').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });

  // Outros testes unitários...

  it('should display a transparent square', () => {
    cy.mount(<ColorPanel red={0} green={0} blue={0} alpha={0} />);
    cy.get('div').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });
});

describe("App", () => {
  it("should update the color when sliders are changed", () => {
    cy.visit("/");
    cy.get("[data-cy=red-slider]").invoke("val", 255).trigger("change");
  });
  it.only("should update the color when sliders are changed", () => {
    cy.visit("/");
    cy.get("[data-cy=green-slider]").invoke("val", 200).trigger("change");
  });
});