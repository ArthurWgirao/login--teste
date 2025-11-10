describe('Página de Login', () => {
  it('deve abrir a página inicial', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
