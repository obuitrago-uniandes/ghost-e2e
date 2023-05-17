const loginPage = require("../page/login.page");
const poolData = require("../mock/priori/test.json");

/// <reference types="cypress" />

context("Navigation", () => {


  beforeEach(() => {
    cy.wait(3000);
  });

  it("Scenario: Como usuario creo una página en borrador", () => {
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    index = Math.floor(Math.random() * 100);
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(poolData[index].email)
        .fillPassword(poolData[index].password_invalid)
        .submit();
    });
  });

});