
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


