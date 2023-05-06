class GeneralAdminPage {
  clickExpandTitleAndDescriptionBtn() {
    cy.contains(".gh-setting-title", "Title & description")
      .parent()
      .parent()
      .find("button")
      .click({ force: true });
    return this;
  }
}

module.exports = new GeneralAdminPage();
