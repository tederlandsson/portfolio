import * as constants from '../fixtures/pageElements';
import * as config from '../fixtures/config';

describe('Portfolio smoke test suite', () => {
  const verbose: boolean = true; // This should be parameterised
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

  it('Has correct browser title', () => {
    cy.title().should('equal', config.testData.pageTitle);
  })

  it('Opens the overlay', () => {
    const button = cy.get(constants.overlay.button);
    button.scrollIntoView();
    button.should('be.visible');
    button.click();
  })

  // it('Verifies overlay has content', () => {
  //   const overlay = cy.get(constants.overlay);
  //   overlay.scrollIntoView();
  //   overlay.should('be.visible');

  //   const copy = [constants.overlayHeaders, constants.overlayText];
  //   const errors = [];

  //   copy.map((x, index) => {
  //     cy.get(x).then(x => {
  //       x.text().length > 0 || errors.push({x, index});
  //     })
  //   })
  //   expect(errors.length).should('be.empty')
  // })

  it('Closes the overlay', () => {
    cy.get(constants.overlay.overlayCloseButton).click();
  })

})  