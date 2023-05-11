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
      await this.driver.url("http://localhost:3002/ghost/#/signout");
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

When("I go to Settings page", async function () {
  return await this.adminPage.settingsMenuBtn.click();
});

When("I go to General Settings page", async function () {
  return await this.adminPage.generalMenuBtn.click();
});

//Navigation Setting Feature

When("I go to Navigation Settings page", async function () {
  return await this.adminPage.navigationMenuBtn.click();
});

When("I enter navigation label {string}", async function (label) {
  return await this.navigationAdminPage.addNavigationLabelInput.setValue(label);
});

When("I enter navigation url {string}", async function (url) {
  return await this.navigationAdminPage.addNavigationUrlInput.setValue(url);
});

When("I click on delete navigation item {string}", async function (value) {
  return await this.navigationAdminPage.deleteLastNavigationItemBtn.click();
});

When("I click in add item to navigation", async function () {
  return await this.navigationAdminPage.addNavigationItemBtn.click();
});

When("I save navigation settings", async function () {
  await this.navigationAdminPage.saveNavigationSettings();
  this.driver.waitUntil(
    () => () => {
      return this.navigationAdminPage.saveBtn.getText() === "Saved";
    },
    {
      timeout: 5000,
      timeoutMsg: "expected text to change",
    }
  );
  await this.driver.pause(3000);
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
