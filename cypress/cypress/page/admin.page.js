class AdminPage {
  clickGeneralBtn() {
    cy.contains("a", "General").click({ force: true });
    return this;
  }
}

module.exports = new AdminPage();
