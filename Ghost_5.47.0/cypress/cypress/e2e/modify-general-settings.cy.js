const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const generalAdminPage = require("../page/general.admin.page");
const principalPage = require("../page/principal.page");
const screenShots = require("../page/screenshots");

/// <reference types="cypress" />

context("Modificar Información General", () => {
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:3001/ghost/#/signin"
    screenShots.incrementIndexScenario();
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    screenShots.screenShot();
    /// And I Sign In with email and password
    cy.get("@ghostData").then((ghostData) => {
      loginPage.fillEmail(ghostData.email).fillPassword(ghostData.password);
      screenShots.screenShot();
      loginPage.submit();
    });
  });

  it("Validar XSS en el título.", () => {
    const title = "</title><script>var a = 1;</script><title>";
    /// When I go to General Settings page
    adminPage.clickSettingsBtn();
    adminPage.clickGeneralSettingsBtn();
    screenShots.screenShot();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    screenShots.screenShot();
    /// And I enter title
    generalAdminPage.fillTitle(title);
    screenShots.screenShot();
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    screenShots.screenShot();
    /// And I navigate to home page
    principalPage.visit();
    screenShots.screenShot();
    /// Then I expect to get site title equals to title entered
    principalPage.metaTitle.should("have.text", title);
  });

  it("Modificar la descripción del sitio.", () => {
    const title = "Detestable (adjective): software that isn't testable.";
    /// When I go to General Settings page
    adminPage.clickSettingsBtn();
    adminPage.clickGeneralSettingsBtn();
    screenShots.screenShot();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    screenShots.screenShot();
    /// And I enter description
    generalAdminPage.fillDescription(title);
    screenShots.screenShot();
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    screenShots.screenShot();
    /// And I navigate to home page
    principalPage.visit();
    screenShots.screenShot();
    /// Then I expect to get site description equals to title entered
    principalPage.siteDescription.should("have.text", title);
  });
});
