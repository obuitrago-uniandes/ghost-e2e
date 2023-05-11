const Page = require("./page");

class AdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get settingsMenuBtn() {
    return this.driver.$('.gh-nav-body').$('[data-test-nav="settings"]');
  }
  get generalMenuBtn() {
    return this.driver.$('.gh-main').$('[data-test-nav="general"]');
  }
  get navigationMenuBtn() {
    return this.driver.$('.gh-main').$('[data-test-nav="navigation"]');
  }
  get tagMenuBtn() {
    return this.driver.$('[href="#/tags/"]');
  }
  get pageButton(){
    return this.driver.$('.gh-nav-body').$('a=Pages');
  }
}

module.exports = AdminPage;
