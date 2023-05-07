const Page = require("./page");

class PostAdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get newPost() {
    return this.driver.$('[href="#/editor/post/"]');
  }

  get previewBtn() {
    return this.driver.$('[data-test-button="publish-preview"]');
  }
  get publishBtn() {
    return this.driver.$('[data-test-button="publish-flow"]');
  }
  get confirmPublishBtn() {
    return this.driver.$('[data-test-button="confirm-publish"]');
  }
  get continueBtn() {
    return this.driver.$('[data-test-button="continue"]');
  }
  get volverBtn() {
    return this.driver.$('[data-test-link="posts"]');
  }
  get editBtn() {
    return this.driver.$('[title="Go to Editor"]');
  }
  
  get nameInput() {
    return this.driver.$('[placeholder="Post title"]');
  }
  
  get descriptionInput() {
    return this.driver.$('[data-placeholder="Begin writing your post..."]');
  }

  get encontrarPost() {
    return this.driver.$('a=Posts').parentElement().parentElement().parentElement().parentElement().parentElement();
  }

}

module.exports = PostAdminPage;
