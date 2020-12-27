// SEO utiliuty class

class Seo {
  /**
   * Get text from cypresse element
   * @param element
   */
  getTextFromElement(element: Cypress.Chainable<HTMLElement>) {
    return element.invoke('text');
  }

  isGoodTitle(title: Cypress.Chainable<string> = cy.title(), validtitleEnd: string = '| Vovlo Cars') {
    return title.toString().endsWith(validtitleEnd);
  }
}

export default new Seo();