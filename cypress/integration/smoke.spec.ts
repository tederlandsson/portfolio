import * as elements from '../fixtures/pageElements';

describe('Cypress', () => {
    it('is working', () => {     
        expect(true).to.equal(true)   
    }) 
    
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    })

    it('Renders wave icon', () => {
      const wave = cy.get(elements.wave);
      wave.scrollIntoView();
      wave.should('be.visible');
    })

    it('Renders footer', () => {
      const footer = cy.get(elements.footer);
      footer.scrollIntoView();
      footer.should('be.visible');
    })

    it('Renders has browser titlte', () => {
      cy.title().should('include', '|');
    })
})  