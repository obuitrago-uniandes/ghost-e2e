const Page = require("./page");

class RegistrationPage extends Page {
  constructor(driver) {
    super(driver);
  }
  get step1Btn() {
    return this.driver.$("a=Create your account");
  }
  get step2Btn() {
    return this.driver.$("form#setup").$('button[type="submit"]');
  }
  get step3Btn() {
    return this.driver.$('button.gh-flow-skip');
  }
  get siteTitleInput() {
    return this.driver.$('form#setup').$('input[name="blog-title"]');
  }
  get fullNameInput() {
    return this.driver.$('form#setup').$('input[name="name"]');
  }
  get emailInput() {
    return this.driver.$('form#setup').$('input[name="email"]');
  }
  get passwordInput() {
    return this.driver.$('form#setup').$('input[name="password"]');
  }

  goToStep2() {
    this.step1Btn.click();
  }
  goToStep3() {
    this.step2Btn.click();
  }
}

module.exports = RegistrationPage;
