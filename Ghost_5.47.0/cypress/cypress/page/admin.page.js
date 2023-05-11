class AdminPage {
  clickPostBtn() {
    cy.get('a[data-test-nav="posts"]').click({ force: true })
    return this;
  }
}

module.exports = new AdminPage();
