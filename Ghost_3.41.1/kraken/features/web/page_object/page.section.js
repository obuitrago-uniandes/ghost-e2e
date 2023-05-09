const Page = require("./page");

class PageSection extends Page {
  constructor(driver) {
    super(driver);
  }
  
  get createButton() {
    return this.driver.$(".gh-canvas").$("a=New page");
  }
  get titlePage() {
    return this.driver.$("textarea[placeholder='Page Title']")
  }
  get contentPage() {
    return this.driver.$("div[data-kg='editor-wrapper']")
  }
  get publishButton() {
    return this.driver.$(".view-actions").$("span=Publish");
  }
  get publishButtonNow() {
    return this.driver.$(".gh-publishmenu-footer").$("span=Publish");
  }
  get pagesBackButton() {
    return this.driver.$(".gh-editor-header").$('a=Pages');
  }
  get pageUntitled(){
    return this.driver.$('h3=(Untitled)');
  }
  get pageEdit(){
    const name = `h3=${this.setTitle()}`
    return this.driver.$(name);
  }
  get plusButton(){
    return this.driver.$("button[aria-label='Add a card']");
  }
  get cardHtml() {
    return this.driver.$("div=Insert a raw HTML card");
  }
  get textAreaHtml() {
    return this.driver.$(".koenig-editor").$('.CodeMirror-code')
  }
  get updateDropDown() {
    return this.driver.$(".view-actions").$("span=Update");
  }
  get updateButton() {
    return this.driver.$(".gh-publishmenu-footer").$("span=Update");
  }
  get settingsButton(){
    return this.driver.$(".view-actions").$("button[title='Settings']");
  }
  get titlePageWeb(){
    const select = `h1=${this.setTitle()}`
    return this.driver.$$(select);
  }
  get iframeWeb(){
    return this.driver.$$('iframe');
  }
  get pageItem(){
    const select = `h3=${this.setTitle()}`
    return this.driver.$$(select);
  }
  createNewPage() {
    this.createButton.click();
  }
  setTitle() {
    return 'This title page'
  }
  setHtml(){
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/7X8II6J-6mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  }
}

module.exports = PageSection;
