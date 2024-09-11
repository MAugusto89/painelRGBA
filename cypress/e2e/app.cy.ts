// cypress/e2e/app.cy.ts
beforeEach(() => {
  cy.visit("/");
});
describe("App", () => {
  it.only("should update the color when sliders are changed", () => {
    const red = 178;
    const green = 72;
    const blue = 220;
    const alpha = 5;
    cy.get("[data-cy=red-slider]")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(red))
      .trigger("change");
    cy.wait(250);
    cy.get("[data-cy=green-slider]").type(green.toString()).trigger("change");
    cy.wait(250);
    cy.get("[data-cy=blue-slider]").type(blue.toString()).trigger("change");
    cy.wait(250);
    cy.get("[data-cy=alpha-slider]")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepDown(alpha))
      .trigger("change");
  });
});
