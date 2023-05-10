const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const designAdminPage = require("../page/design.admin.page");
const principalPage = require("../page/principal.page");
const screenShots = require("../page/screenshots")

/// <reference types="cypress" />

context("Modificar Información de diseño", () => {
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:3002/ghost/#/signin"
    screenShots.incrementIndexScenario();
    screenShots.resetIndexStep();
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    /// And I Sign In with email and password
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    screenShots.screenShot();
    cy.wait(1000);
  });

  it("Aquí la prueba", () => {
    
  });
});
