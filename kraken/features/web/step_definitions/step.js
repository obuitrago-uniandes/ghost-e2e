const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require("chai").expect;

Given(
  "I have previously registered with {kraken-string} and {kraken-string}",
  async function (email, password) {
    if (await this.registrationPage.step1Btn.isExisting()) {
      await this.registrationPage.step1Btn.click();
      await this.registrationPage.siteTitleInput.setValue(
        "The Software Design Company"
      );
      await this.registrationPage.fullNameInput.setValue("Equipo 20");
      await this.registrationPage.emailInput.setValue(email);
      await this.registrationPage.passwordInput.setValue(password);
      await this.registrationPage.step2Btn.click();
      await this.registrationPage.step3Btn.click();
      await this.driver.url("http://localhost:2368/ghost/#/signout");
    }
  }
);
When("I enter email {kraken-string}", async function (email) {
  return await this.loginPage.email.setValue(email);
});
When("I enter password {kraken-string}", async function (password) {
  return await this.loginPage.password.setValue(password);
});

When("I Sign In", async function () {
  return await this.loginPage.submit();
});

When("I go to General Settings page", async function () {
  return await this.adminPage.generalMenuBtn.click();
});

When("I expand Title & description section", async function () {
  return await this.generalAdminPage.titleExpandBtn.click();
});

When("I enter title {string}", async function (title) {
  return await this.generalAdminPage.titleInput.setValue(title);
});

When("I enter description {string}", async function (description) {
  return await this.generalAdminPage.descriptionInput.setValue(description);
});

When("I save general settings", async function () {
  await this.generalAdminPage.saveGeneralSettings();
  this.driver.waitUntil(
    () => () => {
      return this.generalAdminPage.saveBtn.getText() === "Saved";
    },
    {
      timeout: 5000,
      timeoutMsg: "expected text to change",
    }
  );
  return "ok";
});

Then("I expect to get site title {string}", async function (title) {
  expect(await this.principalPage.metaTitle.getText()).to.equals(title);
});

Then("I expect to get site description {string}", async function (title) {
  expect(await this.principalPage.siteDescription.getText()).to.equals(title);
});

/* DESIGN SETTINGS FEATURE */

When("I go to Design Settings page", async function () {
  return await this.adminPage.designMenuBtn.click();
});

When("I enter navigation label {string}", async function (label) {
  return await this.designAdminPage.addNavigationLabelInput.setValue(label);
});

When("I enter navigation url {string}", async function (url) {
  return await this.designAdminPage.addNavigationUrlInput.setValue(url);
});

When("I click on delete navigation item {string}", async function (value) {
  return await this.designAdminPage.deleteLastNavigationItemBtn.click();
});

When("I click in add item to navigation", async function () {
  return await this.designAdminPage.addNavigationItemBtn.click();
});

When("I clean Last Navigation Item", async function () {
  return await this.designAdminPage.lastNavigationLabelItem.setValue("");
});

When("I save design settings", async function () {
  await this.designAdminPage.saveDesignSettings();
  this.driver.waitUntil(
    () => () => {
      return this.designAdminPage.saveBtn.getText() === "Saved";
    },
    {
      timeout: 5000,
      timeoutMsg: "expected text to change",
    }
  );
  return "ok";
});

Then(
  "I expect to have a navigation menu item with {string} value and link to {string}",
  async function (value, url) {
    expect(
      await this.principalPage.getMenuItem(value).getAttribute("href")
    ).to.equals(url);
  }
);

Then(
  "I expect do not have a navigation menu item with {string}",
  async function (value) {
    await this.principalPage.getMenuItem(value).waitForExist({
      timeout: 5000,
      reverse: true,
    });
  }
);
Then(
  "I expect see error on last navigation label {string}",
  async function (error) {
    expect(
      await this.designAdminPage.lastNavigationLabelResponse.getText()
    ).to.equals(error);
  }
);
Then(
  "I expect see error on new navigation label {string}",
  async function (error) {
    expect(
      await this.designAdminPage.addNavigationLabelResponse.getText()
    ).to.equals(error);
  }
);
