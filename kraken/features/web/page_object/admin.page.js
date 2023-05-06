const Page = require("./page");

class AdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get generalMenuBtn() {
    return this.driver.$('.gh-nav-body').$('a=General');
  }
  get designMenuBtn() {
    return this.driver.$('.gh-nav-body').$('a=Design');
  }
  get pageButton(){
    return this.driver.$('.gh-nav-body').$('a=Pages');
  }
}

module.exports = AdminPage;
