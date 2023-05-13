class AdminPage {
  clickSettingsBtn() {
    cy.get('.gh-nav-body [data-test-nav="settings"]').click({ force: true });
    return this;
  }
  clickGeneralSettingsBtn() {
    cy.get('.gh-main [data-test-nav="general"]').click({ force: true });
    return this;
  }
  clickPostBtn() {
    cy.get('a[data-test-nav="posts"]').click({ force: true })
    return this;
  }
}

module.exports = new AdminPage();
