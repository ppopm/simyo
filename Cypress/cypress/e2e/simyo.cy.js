describe('Simyo assessment', () => {
  it('orders a Simyo plan with iPhone 13', () => {
    cy.visit('/');

    // accept cookies
    cy.get('[data-interaction-element="cookie-wall"]')
      .within(() => {
      cy.get('#js-cookie-btn-accept')
        .click();
    });

    cy.get('[data-id="sub-telefoons"]')
      .click();

    cy.get('[data-id="iphone-13"]')
      .first()
      .within(() => {
        cy.get('a.btn')
          .click();
      });

      cy.contains('button', 'Bestellen')
        .click();

      cy.contains('button:visible', 'Verder')
        .as('btn', {type: 'query'})
        .click();

      cy.get('@btn')
        .click();
  });
});