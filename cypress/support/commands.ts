const clickMenuJoinUs = () => {
  cy.get('.hamburger-container__content-list-ul > :nth-child(2) > a').click({ force: true })
}

Cypress.Commands.add('clickMenuJoinUs', clickMenuJoinUs)

declare global {
  namespace Cypress {
    interface Chainable {
      clickMenuJoinUs: typeof clickMenuJoinUs
    }
  }
}

export {}

