import * as constants from '../fixtures/pageElements';
import * as config from '../fixtures/config';
import utils from '../../utils/ui_utils/utilityFunctions';

describe('Portfolio smoke test suite', () => {
  const url: string = config.urls.local;
  const verbose: boolean = utils.verbose;

  it('Opens the web application', () => {
    cy.visit(url);
  })

  it('Renders wave icon', () => {
    const element = utils.getElement(constants.wave);
    utils.verifyElementIsDisplayed(element);
  })

  it('Renders icons in the About component', () => {
    const elements = cy.get(constants.icons).children();
    elements.its('length').should('be.at.least', 4);
    if (verbose) {
      console.log(`Number of icon length: ${elements}`);
    }
  })

  it('Renders footer', () => {
    const element = utils.getElement(constants.footer);
    utils.verifyElementIsDisplayed(element);
  })

  it('Renders all components', () => {
    // eslint-disable-next-line array-callback-return
    constants.components.map((x: string) => {
      cy.get(x).should('be.visible');
      if (verbose) {
        console.log(`Testing component: ${x}`);
      }
    })
  })

  it('Verify all page elements are displayed', () => {
    const elements = constants.elements;
    utils.verifyElementsFromObject(elements);
  })

  it('Has correct browser title', () => {
    cy.title().should('equal', config.testData.pageTitle);
  })

  it('Opens the overlay', () => {
    const element = utils.getElement(constants.aboutElements.button);
    utils.verifyElementIsDisplayed(element);
    utils.clickElement(element);
  })

  it('Verifies the overlay elements', () => {
    const elements = constants.overlayElements;
    utils.verifyElementsFromObject(elements);
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
    const element = utils.getElement(constants.overlayElements.overlayCloseButton);
    utils.clickElement(element);
  })

})  