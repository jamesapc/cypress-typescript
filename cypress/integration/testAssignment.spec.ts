describe('Search Cleverse.com from google.co.th', () => {
  beforeEach(() => {
    cy.visit('https://google.co.th')
    cy.get('.gLFyf').clear().type('Cleverse.com').type('{enter}')
    cy.contains('https://cleverse.com').should('exist')
    cy.get('[href="https://cleverse.com/"] > .LC20lb').click({ force: true })
    cy.get('.loading-block-number-counter').click()
  })

  it('Find JOIN US from home page', () => {
    cy.location().should(loc => {
      expect(loc.href).to.eq('https://cleverse.com/')
    })
    cy.get('.register-section-btn').find('a').click({ force: true })
    cy.location().should(loc => {
      expect(loc.href).to.eq('https://cleverse.com/joinus')
    })
    cy.wait(1000)
    cy.screenshot()
  })

  it('Find JOIN US from hamburger menu', () => {
    cy.location().should(loc => {
      expect(loc.href).to.eq('https://cleverse.com/')
    })
    cy.wait(1000)
    cy.get('.hamburger-line-container').click({ force: true })
    cy.clickMenuJoinUs()
    cy.location().should(loc => {
      expect(loc.href).to.eq('https://cleverse.com/joinus')
    })
    cy.wait(1000)
    cy.screenshot()
  })
})