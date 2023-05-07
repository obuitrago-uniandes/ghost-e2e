class DesignAdminPage {
  get saveSettingsBtn() {
    return cy.contains(".gh-canvas-title", "Design").parent().find("button");
  }
  get addNavigationItemBtn() {
    return cy
      .get(".gh-canvas form#settings-navigation")
      .contains("button", "Add");
  }
  get deleteLastNavigationItemBtn() {
    return cy.get(
      ".gh-canvas form#settings-navigation .sortable-objects.ember-view .js-draggableObject:last-child button"
    );
  }

  get lastNavigationLabelInput() {
    return cy.get(
      ".gh-canvas form#settings-navigation .sortable-objects.ember-view .js-draggableObject:last-child .gh-blognav-label input"
    );
  }

  get lastNavigationLabelResponse() {
    return cy.get(
      ".gh-canvas form#settings-navigation .sortable-objects.ember-view .js-draggableObject:last-child .gh-blognav-label .response"
    );
  }

  get addNavigationLabelInput() {
    return cy
      .get(".gh-canvas form#settings-navigation")
      .contains("button", "Add")
      .parent()
      .find(".gh-blognav-label input");
  }
  get addNavigationLabelResponse() {
    return cy
      .get(".gh-canvas form#settings-navigation")
      .contains("button", "Add")
      .parent()
      .find(".gh-blognav-label .response");
  }

  get addNavigationUrlInput() {
    return cy
      .get(".gh-canvas form#settings-navigation")
      .contains("button", "Add")
      .parent()
      .find(".gh-blognav-url input");
  }

  get addNavigationUrlResponse() {
    return cy
      .get(".gh-canvas form#settings-navigation")
      .contains("button", "Add")
      .parent()
      .find(".gh-blognav-url .response");
  }

  saveDesignSettings() {
    this.saveSettingsBtn.click().should("include.text", "Saved");
  }

  saveFailedDesignSettings() {
    this.saveSettingsBtn.click().should("include.text", "Retry");
  }
}

module.exports = new DesignAdminPage();
