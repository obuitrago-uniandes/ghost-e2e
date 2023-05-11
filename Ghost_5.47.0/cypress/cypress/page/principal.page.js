class PrincipalPage {
  get siteDescription() {
    return cy.get("p.site-description");
  }

  get metaTitle() {
    return cy.get("head title");
  }

  visit() {
    return cy.visit("/");
  }
}

module.exports = new PrincipalPage();
