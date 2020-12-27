import * as constants from '../fixtures/pageElements';
import * as config from '../fixtures/config';

describe('Cypress', () => {
  const verbose: boolean = true; // This should be parameterised
  // const url: string = Cypress.env('host') === 'remote' ? config.urls.remote : config.urls.local;
  const url: string = config.urls.local;

  it('Opens the web application', () => {
    cy.visit(url);
  })

  it('Renders wave icon', () => {
    const wave = cy.get(constants.wave);
    wave.scrollIntoView();
    wave.should('be.visible');
  })

  it('Renders icons in the About component', () => {
    const elements = cy.get(constants.icons).children();
    elements.its('length').should('be.at.least', 4);
    if (verbose) {
      console.log(`Number of icon length: ${elements}`);
    }
    
  })

  it('Renders footer', () => {
    const footer = cy.get(constants.footer);
    footer.scrollIntoView();
    footer.should('be.visible');
  })

  it('Renders all components', () => {
    const verbose: boolean = true;

    constants.components.map((x: string) => {
      cy.get(x).should('be.visible');
      if (verbose) {
        console.log(`Testing component: ${x}`);
      }
    })

  })

  it('Renders has browser titlte', () => {
    cy.title().should('include', '|');
  })
})  