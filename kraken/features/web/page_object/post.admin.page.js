const Page = require("./page");

class PostAdminPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get newPost() {
    return this.driver.$('[href="#/editor/post/"]');
  }

  get publishBtn() {
    return this.driver.$(".gh-publishmenu").$("span=Publish");
  }
  get confirmPublishBtn() {
    return this.driver.$(".gh-publishmenu-footer").$("span=Publish");
  }
  get volverBtn() {
    return this.driver.$('[href="#/posts/"]');
  }
  
  get verPublicados(){
    return this.driver.$('href="#/posts/?type=published"');    
  }
  get editBtn() {
    return this.driver.$('[title="Edit this post"]');
  }
  
  get nameInput() {
    return this.driver.$('[placeholder="Post Title"]');
  }
  
  get descriptionInput() {
    return this.driver.$('[data-placeholder="Begin writing your post..."]');
  }

  get encontrarPost() {
    return this.driver.$('.content-list');
  }

}

module.exports = PostAdminPage;
