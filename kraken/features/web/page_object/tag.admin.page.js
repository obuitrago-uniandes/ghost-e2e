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

  get slugInput() {
    return this.driver.$('#tag-slug');
  }
  
  get descriptionInput() {
    return this.driver.$('#tag-description');
  }

  get nameInput() {
    return this.driver.$('#tag-name');
  }
  get validateError() {
    return this.driver.$('[data-test-input="tag-name"]').parentElement().$("p=You must specify a name for the tag.");
  }

 
}

module.exports = TagAdminPage;
