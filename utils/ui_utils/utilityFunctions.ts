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


  verifyElementsFromObject(elements: object): void {
    for (const key in elements) {
      if (this.verbose) {
        console.log(`Element selector is: ${elements[key]}`);
      }
      const element: Cypress.Chainable<any> = this.getElement(elements[key]);
      this.verifyElementIsDisplayed(element);
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
}

export default new UtilityFunctions();