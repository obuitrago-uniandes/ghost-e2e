const Page = require("./page");

class PageSection extends Page {
  constructor(driver) {
    super(driver);
  }
  
  get createButton() {
    return this.driver.$(".gh-canvas").$("a=New page");
  }
  get titlePage() {
    return this.driver.$("textarea[placeholder='Page title']")
  }
  get contentPage() {
    return this.driver.$("div[data-kg='editor']")
  }
  get publishButton() {
    return this.driver.$(".gh-editor-header").$("span=Publish");
  }
  get continueButton() {
    return this.driver.$(".gh-publish-cta").$('span=Continue, final review →');
  }
  get rightNowButton() {
    return this.driver.$("button[data-test-button='confirm-publish']");
  }
  get backEditorButton() {
    return this.driver.$(".gh-back-to-editor");
  }
  get pagesBackButton() {
    return this.driver.$(".gh-editor-back-button");
  }
  get pageUntitled(){
    return this.driver.$('h3=(Untitled)');
  }
  get pageCreated(){
    return this.driver.$(`h3=${this.setTitle()}`);
  }
  get pageEdit(){
    const name = `h3=${this.setTitle()}`
    return this.driver.$(name);
  }
  get updateButton() {
    return this.driver.$(".gh-editor-header").$("span=Update");
  }
  get pageItem(){
    const select = `h3=${this.setTitle()}`
    return this.driver.$$(select);
  }
  /*  */
  get pageItemEdit(){
    const select = `h3=Titulo actualizado`
    return this.driver.$$(select);
  }
  get scrollMenu(){
    return this.driver.$(".settings-menu-pane-in");
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
  setText(){
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et sem quis magna viverra rutrum. Vestibulum mollis semper ornare. Vestibulum pharetra metus id posuere consequat. Cras eu mi facilisis ante luctus ornare sed eget justo. Nullam finibus tincidunt ex vel vestibulum. Vestibulum interdum metus id lacus eleifend iaculis. Mauris nec tortor enim. Proin vitae sagittis velit, non iaculis risus. Pellentesque laoreet ipsum sit amet gravida commodo. Integer ipsum turpis, lacinia at egestas eget, rhoncus quis elit. Integer augue ligula, placerat a urna vitae, accumsan bibendum velit. Nunc sapien arcu, efficitur vel tellus ut, maximus venenatis quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin quam quam, congue eget pulvinar id, auctor vel ante.Vestibulum sapien neque, aliquet quis feugiat nec, tincidunt sit amet nisi. Etiam eget posuere augue, eget rhoncus quam. Donec maximus faucibus nisl, id suscipit ex blandit et. Etiam id tellus magna. Morbi sollicitudin magna non leo maximus, nec tincidunt mi tempor. Morbi tempus, elit nec laoreet vulputate, turpis lorem fermentum risus, eget mollis quam ligula sed felis. Phasellus mattis dui non volutpat iaculis. Suspendisse eget tortor tortor. Vivamus eget facilisis dolor. Etiam vitae odio feugiat lacus accumsan rhoncus in id arcu. Nunc lacinia congue odio, et semper massa rutrum vel.'
  }
}

module.exports = PageSection;
