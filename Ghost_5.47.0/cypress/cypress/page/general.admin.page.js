class GeneralAdminPage {
  get saveSettingsBtn() {
    return cy
      .contains(".gh-canvas-title", "General")
      .parent()
      .parent()
      .find("button");
  }
  clickExpandTitleAndDescriptionBtn() {
    const btn = cy
      .contains(".gh-expandable-title", "Title & description")
      .parent()
      .parent()
      .find("button");
    btn.click({ force: true });
    cy.wait(1000);
    return this;
  }

  clickSaveSettings() {
    this.saveSettingsBtn.click({ force: true }).should("include.text", "Saved");
    return this;
  }

  fillTitle(value) {
    const field = cy
      .contains(".gh-expandable-title", "Title & description")
      .parent()
      .parent()
      .parent()
      .contains("p", "The name of your site")
      .parent()
      .find("input");
    field.clear({ force: true }).type(value, { force: true });

    return this;
  }
  fillDescription(value) {
    const field = cy
      .contains(".gh-expandable-title", "Title & description")
      .parent()
      .parent()
      .parent()
      .contains("p", "Used in your theme, meta data and search results")
      .parent()
      .find("input");
    field.clear({ force: true }).type(value, { force: true });

    return this;
  }
}

module.exports = new GeneralAdminPage();
