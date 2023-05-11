const Page = require("./page");

class NavigationAdminPage extends Page {
  constructor(driver) {
    super(driver);
  }

  get saveBtn() {
    return this.driver
      .$(".gh-canvas-title=Navigation")
      .parentElement()
      .parentElement()
      .$("button");
  }

  get addNavigationItemBtn() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$("button=Add");
  }
  
  get deleteLastNavigationItemBtn() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$(".sortable-objects.ember-view")
      .$(".js-draggableObject:last-child")
      .$("button");
  }

  get addNavigationLabelInput() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$("button=Add")
      .parentElement()
      .$(".gh-blognav-label")
      .$("input");
  }
  get addNavigationLabelResponse() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$("button=Add")
      .parentElement()
      .$(".gh-blognav-label")
      .$(".response");
  }

  get addNavigationUrlInput() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$("button=Add")
      .parentElement()
      .$(".gh-blognav-url")
      .$("input");
  }

  get addNavigationUrlResponse() {
    return this.driver
      .$(".gh-canvas")
      .$("form#settings-navigation")
      .$("button=Add")
      .parentElement()
      .$(".gh-blognav-url")
      .$(".response");
  }

  saveNavigationSettings() {
    this.saveBtn.click();
  }
}

module.exports = NavigationAdminPage;
