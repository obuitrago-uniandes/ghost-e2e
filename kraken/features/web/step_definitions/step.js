const { Given, When, Then, BeforeAll } = require("@cucumber/cucumber");
const expect = require("chai").expect;

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

Then('I validate error', async function() {
  this.tagAdminPage.validateError.isExisting();
});

When('I enter slug {string}', async function (slug) {
  return await this.tagAdminPage.slugInput.setValue(slug);
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

Then('I expect that delete the characters', async function() {
  let elementS = await this.driver.$('#tag-slug').getValue();
  expect(elementS).to.equal(elementS.replace('/[^\w\s]/gi', ''));
});

Then('I expect have the max characters error', async function() {
  let elementN = await this.driver.$('#tag-description').getValue();
  expect(elementN.length).to.not.equal(500);
});




/* CREATE POST FEATURE */


When('I click Post', async function() {
  return await this.adminPage.postMenuBtn.click();
});
When('I click New Post', async function() {
  return await this.postAdminPage.newPost.click();
});
When('I enter titulo Post {string}', async function (titulo) {
  return await this.postAdminPage.nameInput.setValue(titulo);
});

When('I enter description Post {string}', async function (description) {
  return await this.postAdminPage.descriptionInput.setValue(description);    
});

Then('I click preview', async function() {
  return await this.postAdminPage.previewBtn.click();    
});

Then('I click publish', async function() {
  return await this.postAdminPage.publishBtn.click();    
});

Then('I click continue', async function() {
  return await this.postAdminPage.continueBtn.click();
});

Then('I click confirm publish', async function() {
  return await this.postAdminPage.confirmPublishBtn.click();
}); 

Then('I back to list Post', async function() {
  return await this.postAdminPage.volverBtn.click();
}); 
Then('I expect have to post with the same name {string}', async function(value) {
  this.postAdminPage.encontrarPost.$(`h3=${value}`).isExisting();
}); 

Then('I edit Post', async function() {
  return await this.postAdminPage.editBtn.click();
}); 





