const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const generalAdminPage = require("../page/general.admin.page");
const principalPage = require("../page/principal.page");

/// <reference types="cypress" />

context("Modificar Información General", () => {
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:2368/ghost/#/signin"
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    /// And I Sign In with email and password
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
  });

  it("Validar XSS en el título.", () => {
    const title = "</title><script>var a = 1;</script><title>";
    /// When I go to General Settings page
    adminPage.clickGeneralBtn();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    /// And I enter title 
    generalAdminPage.fillTitle(title);
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// Then I expect to get site title equals to title entered
    principalPage.metaTitle.should("have.text", title);
  });

  it("Validar el cambio de título.", () => {
    const title = "Un título común";
    /// When I go to General Settings page
    adminPage.clickGeneralBtn();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    /// And I enter title 
    generalAdminPage.fillTitle(title);
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// Then I expect to get site title equals to title entered
    principalPage.metaTitle.should("have.text", title);
  });

  it("Validar un título con comillas dobles.", () => {
    const title = "\"Título con comillas\"";
    /// When I go to General Settings page
    adminPage.clickGeneralBtn();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    /// And I enter title 
    generalAdminPage.fillTitle(title);
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// Then I expect to get site title equals to title entered
    principalPage.metaTitle.should("have.text", title);
  });

  it("Modificar la descripción del sitio.", () => {
    const title = "Detestable (adjective): software that isn't testable.";
    /// When I go to General Settings page
    adminPage.clickGeneralBtn();
    /// And I expand Title & description section
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    /// And I enter description 
    generalAdminPage.fillDescription(title);
    /// And I save general settings
    generalAdminPage.clickSaveSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// Then I expect to get site description equals to title entered
    principalPage.siteDescription.should("have.text", title);
  });
});
