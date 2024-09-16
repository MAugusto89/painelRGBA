// cypress/e2e/colorPanel.cy.ts
/*describe('ColorPanel', () => {
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

import ColorPanel from "./ColorPanel";

describe('<ColorPanel />', () => {


  it('should exhibit the right color', () => {

    const color = { 
      red: 255,
      green: 118,
      blue: 18,
      alpha: 0.2 
    };


    cy.mount(<ColorPanel color={color} />);//+

    cy.get('[data-cy="colorPanelContainer"]')
      .should('have.css', 'background-color') 
      .and('match', new RegExp(`rgba\\(${color.red}, ${color.green}, ${color.blue}, ${color.alpha}\\)`)); 
  });


  it('should exhibit a transparent background', () => {

    const color = { 
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0 
    };

    cy.mount(<ColorPanel color={color} />);


    cy.get('[data-cy="colorPanelContainer"]')
      .should('have.css', 'background-color')
      .and('match', new RegExp(`rgba\\(${color.red}, ${color.green}, ${color.blue}, ${color.alpha}\\)`));
  });


  it('should update the RGBA values when sliders are adjusted', () => {

    const red = 100;
    const green = 100;
    const blue = 100;
    const alpha = 0.6;

 
    cy.mount(<ColorPanel color={{ red, green, blue, alpha }} />);


    cy.get('[data-cy="inputRed"]').invoke('val', red).trigger('change');
    cy.wait(500); 
    cy.get('[data-cy="inputGreen"]').invoke('val', green).trigger('change');
    cy.wait(500);
    cy.get('[data-cy="inputBlue"]').invoke('val', blue).trigger('change');
    cy.wait(500);
    cy.get('[data-cy="inputAlpha"]').invoke('val', alpha).trigger('change');
    cy.wait(500);

 
    const roundedAlpha = alpha.toFixed(1);

    cy.get('[data-cy="colorPanelContainer"]').should("have.css", "background-color")
      .and('match', new RegExp(`rgba\\(${red}, ${green}, ${blue}, ${roundedAlpha}\\)`));
  });
});*/