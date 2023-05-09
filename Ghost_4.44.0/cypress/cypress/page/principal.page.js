class PrincipalPage {
  get metaTitle() {
    return cy.get("head title");
  }
  get siteDescription() {
    return cy.get("h2.site-description");
  }

  getMenuItem(value) {
    return cy.get(".site-home-header .site-nav-content").contains("a", value);
  }

  visit() {
    return cy.visit("/");
  }
}

module.exports = new PrincipalPage();
