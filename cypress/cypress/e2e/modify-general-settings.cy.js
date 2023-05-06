const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const generalAdminPage = require("../page/general.admin.page");

/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    adminPage.clickGeneralBtn();
    generalAdminPage.clickExpandTitleAndDescriptionBtn();
    cy.wait(10000);
  });

  it("Aquí empieza la prueba", () => {});
});
