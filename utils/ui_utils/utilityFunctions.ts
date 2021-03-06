class UtilityFunctions {
  verbose: boolean;

  constructor() {
    this.verbose = false;
  }

  /**
  * Returns a cypress selector
  * @param selector
  */
  getElement(selector: string) {
    return cy.get(selector);
  }

  /**
   * Checks that an element is displayed
   * @param {Cypress.Chainable<any>} element 
   */
  verifyElementIsDisplayed(element: Cypress.Chainable<any>): void {
    element.scrollIntoView();
    element.should('be.visible');
  }


  verifyElementsFromObject(elements: any): void {
    for (const key in elements) {
      if (this.verbose) {
        console.log(`Element selector is: ${elements[key]}`);
      }
      const element: Cypress.Chainable<any> = this.getElement(elements[key]);
      // eslint-disable-next-line no-loop-func
      element.each(($el) => {
        this.verifyElementIsDisplayed(cy.wrap($el));
      });
    }
  }

  /**
   * Get text from cypresse element
   * @param element
   */
  getTextFromElement(element: Cypress.Chainable<HTMLElement>): Cypress.Chainable<any> {
    if (this.verbose) {
      const text = element.invoke('text');
      console.log(`Element text:\t${text}`)
    }
    return element.invoke('text');
  } 

  /**
   * Clicks a cypress selector
   * @param element
   */
  clickElement(element: Cypress.Chainable<any>): void {
    element.scrollIntoView();
    element.click();
    this.verbose && console.log(`Clicked element ${element}`);
  }

  /**
   * Function for checking CSS property
   */
  verifyCssProperty(element: Cypress.Chainable<JQuery<HTMLElement>>, cssProperty: string, cssPropertyValue: string, verbose: boolean = false) {
    if (verbose) {
      console.log(`[+] testing element ${element} for css property ${cssPropertyValue} --- expecting: ${cssPropertyValue}`);
    }
    
    console.log(`Element is ${element}`);
    element.should('have.css', cssProperty, cssPropertyValue);
  }
}

export default new UtilityFunctions();