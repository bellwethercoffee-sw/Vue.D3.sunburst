// https://on.cypress.io/api

describe('Sunburst', () => {
  it('Renders', () => {
    cy.visit('/')
    cy.get('.graph')
      .find('svg')
      .should('have.length', 2)
  })
})
