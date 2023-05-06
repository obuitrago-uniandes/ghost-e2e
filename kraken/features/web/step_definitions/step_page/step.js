const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
//STEP DEFINITION PAGE SECTION
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

When("I go to section pages", async function () {
    return await this.adminPage.pageButton.click();
});

When("I go to Create Page", async function () {
    return await this.pageSection.createNewPage();
});

When("I click on title", async function () {
    return await this.pageSection.titlePage.click();
});

When("I click on content", async function () {
    return await this.pageSection.contentPage.click();
});

When("I click on publish", async function () {
    return await this.pageSection.publishButton.click();
});

When("I click on publish now", async function () {
    return await this.pageSection.publishButtonNow.click();
});
When("I go to back page list", async function () {
    return await this.pageSection.pagesBackButton.click();
});

When("I click on page untitled", async function () {
    return await this.pageSection.pageUntitled.click();
});
When("I enter title edit {kraken-string}", async function (title) {
    return await this.pageSection.titlePage.setValue(title);
});
When("I enter title", async function () {
    return await this.pageSection.titlePage.setValue(this.pageSection.setTitle());
});

When("I click on plus button", async function () {
    return await this.pageSection.plusButton.click();
});
When("I select html option", async function () {
    return await this.pageSection.cardHtml.click();
});
When("I enter html", async function () {
    return await this.pageSection.textAreaHtml.setValue(this.pageSection.setHtml());
});
When("I click on update dropdown", async function () {
    return await this.pageSection.updateDropDown.click();
});
When("I click on update", async function () {
    return await this.pageSection.updateButton.click();
});
Then('I see that the title is liked', async function () {
    let elements = await this.pageSection.titlePageWeb
    expect(elements.length).to.equal(1);
});
Then('I see that the iframe is liked', async function () {
    let elements = await this.pageSection.iframeWeb
    expect(elements.length).to.equal(1);
});
Then('I see that the item page is liked in list page', async function () {
    let elements = await this.pageSection.pageItem
    expect(elements.length).to.equal(1);
});
/* When("I click on page edit", async function () {
    return await this.pageSection.pageEdit.click();
});
When("I click on settings", async function () {
    return await this.pageSection.settingsButton.click();
});

When('I go to view page', async function () {
    return await this.driver.url(this.pageSection.viewPageUrl().outputs);
}); */
