const loginPage = require("../page/login.page");
const poolData = require("../mock/pseudo/login.mock");

/// <reference types="cypress" />

context("Navigation", () => {

  let data;

  beforeEach(() => {
    (async function () {
      data = await poolData.getData(Math.floor(Math.random() * 100), "2f32fbc0" );  
    })()
    cy.wait(3000);
  });

  it("Scenario: Como usuario creo una página en borrador", () => {
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
   
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(data.email)
        .fillPassword(data.password_invalid)
        .submit();
    });
  });
});