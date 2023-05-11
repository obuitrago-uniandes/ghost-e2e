const Page = require("./page");

class TagAdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get newTag() {
    return this.driver.$('[href="#/tags/new/"]');
  }

  get saveBtn() {
    return this.driver.$('[data-test-button="save"]');
  }
  
  get descriptionInput() {
    return this.driver.$('#tag-description');
  }

  get nameInput() {
    return this.driver.$('#tag-name');
  }
 
}

module.exports = TagAdminPage;
