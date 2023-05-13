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

/* CREATE TAG FEATURE */

When('I click Tag', async function() {
  return await this.adminPage.tagMenuBtn.click();
});

When('I click New Tag', async function() {
  return await this.tagAdminPage.newTag.click();
});

Then('I click save New Tag', async function() {
  return await this.tagAdminPage.saveBtn.click();
});

When('I enter description Tag {string}', async function (description) {
  return await this.tagAdminPage.descriptionInput.setValue(description);
});

When('I enter name Tag {string}', async function (name) {
  return await this.tagAdminPage.nameInput.setValue(name);
});

Then('Are Equals', async function() {
  let elementN = await this.driver.$('#tag-name').getValue();
  let elementS = await this.driver.$('#tag-slug').getValue();
  expect(elementN).to.equal(elementS);
});


Then('I expect have the max characters error', async function() {
  let elementN = await this.driver.$('#tag-description').getValue();
  expect(elementN.length).to.not.equal(500);
});


/* CREACIÓN EDICIÓN PAGINAS */

When("I go to section pages", async function () {
  return await this.adminPage.pageButton.click();
});

When("I go to Create Page", async function () {
  return await this.pageSection.createNewPage();
});

When("I click on title", async function () {
  return await this.pageSection.titlePage.click();
});

When("I enter content", async function () {
  return await this.pageSection.contentPage.setValue(this.pageSection.setText());
});
When("I click on content", async function () {
  return await this.pageSection.contentPage.click();
});

When("I click on publish", async function () {
  return await this.pageSection.publishButton.click();
});

When("I click on continue now", async function () {
  return await this.pageSection.continueButton.click();
});
When("I click on right now", async function () {
  return await this.pageSection.rightNowButton.click();
});
When("I click on back editor", async function () {
  return await this.pageSection.backEditorButton.click();
});
When("I go to back page list", async function () {
  return await this.pageSection.pagesBackButton.click();
});

When("I click on page created", async function () {
  return await this.pageSection.pageCreated.click();
});
When("I enter title edit {kraken-string}", async function (title) {
  return await this.pageSection.titlePage.setValue(title);
});
When("I enter title page", async function () {
  return await this.pageSection.titlePage.setValue(this.pageSection.setTitle());
});
When("I click on update", async function () {
  return await this.pageSection.updateButton.click();
});
Then('I see that the item page is liked in list page', async function () {
  let elements = await this.pageSection.pageItem
  expect(elements.length).to.equal(1);
});
Then('I see that the item page is liked edit in list page', async function () {
  let elements = await this.pageSection.pageItemEdit
  expect(elements.length).to.equal(1);
});

