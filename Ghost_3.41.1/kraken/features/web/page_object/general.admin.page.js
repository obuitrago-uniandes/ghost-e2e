const Page = require("./page");

class GeneralAdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get titleExpandBtn() {
    return this.driver
      .$(".gh-canvas")
      .$("div=Title & description")
      .parentElement()
      .parentElement()
      .$("button");
  }

  get saveBtn() {
    return this.driver
      .$(".gh-canvas-title=General settings")
      .parentElement()
      .$("button");
  }

  get titleInput() {
    return this.driver
      .$(".gh-canvas")
      .$("div=Title & description")
      .parentElement()
      .$("p=The name of your site")
      .parentElement()
      .$("input");
  }

  get descriptionInput() {
    return this.driver
      .$(".gh-canvas")
      .$("div=Title & description")
      .parentElement()
      .$("p=Used in your theme, meta data and search results")
      .parentElement()
      .$("input");
  }

  saveGeneralSettings() {
    this.saveBtn.click();
  }
}

module.exports = GeneralAdminPage;
