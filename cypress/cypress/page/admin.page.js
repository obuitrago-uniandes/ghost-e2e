class AdminPage {
  clickGeneralBtn() {
    cy.contains("a", "General").click({ force: true });
    return this;
  }
  clickPageBtn() {
    cy.get('.gh-nav-manage>li>a').eq(2).click({ force: true })
    return this;
  }
}

module.exports = new AdminPage();
