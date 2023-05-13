const Page = require("./page");

class PrincipalPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get metaTitle() {
    return this.driver.$("head").$("title");
  }
  get siteDescription() {
    return this.driver.$("h2.site-description");
  }

  getMenuItem(value) {
    return this.driver
      .$(".site-home-header")
      .$(".site-nav-content")
      .$(`a=${value}`);
  }
}

module.exports = PrincipalPage;
