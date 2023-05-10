const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const designAdminPage = require("../page/design.admin.page");
const principalPage = require("../page/principal.page");
const screenShots = require("../page/screenshots")

/// <reference types="cypress" />

context("Modificar Información de diseño", () => {
  beforeEach(() => {
    /// Given I navigate to page "http://localhost:3001/ghost/#/signin"
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

  it("Agregar una nueva opción al menú de navegación", () => {
    const label = "The Software Design Lab";
    const url = "https://thesoftwaredesignlab.github.io/";
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    screenShots.screenShot();
    /// And I enter navigation label "The Software Design Lab"
    designAdminPage.addNavigationLabelInput.clear({ force: true }).type(label);
    screenShots.screenShot();
    /// And I enter navigation url "https://thesoftwaredesignlab.github.io/"
    designAdminPage.addNavigationUrlInput.clear({ force: true }).type(url);
    screenShots.screenShot();
    /// And I save design settings
    designAdminPage.saveDesignSettings();
    screenShots.screenShot();
    /// And I navigate to home page
    principalPage.visit();
    screenShots.screenShot();
    /// Then I expect to get site title equals to title entered
    principalPage.getMenuItem(label).should("have.attr", "href", url);
    screenShots.screenShot();
  });

  it("Eliminar la última opción del menú de navegación (recién creada)", () => {
    const label = "The Software Design Lab";
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    screenShots.screenShot();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.deleteLastNavigationItemBtn.click({ force: true });
    screenShots.screenShot();
    /// And I save design settings
    designAdminPage.saveDesignSettings();
    screenShots.screenShot();
    /// And I navigate to home page
    principalPage.visit();
    screenShots.screenShot();
    /// expect do not have a navigation menu item with "The Software Design Lab"
    principalPage.getMenuItem(label).should("not.exist");
    screenShots.screenShot();
  });

  it("Intentar editar un item de navegación cambiando el label a vacío", () => {
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    screenShots.screenShot();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.lastNavigationLabelInput.clear({ force: true });
    screenShots.screenShot();
    /// And I save design settings
    designAdminPage.saveFailedDesignSettings();
    screenShots.screenShot();
    /// Then
    designAdminPage.lastNavigationLabelResponse.should(
      "include.text",
      "You must specify a label"
    );
    screenShots.screenShot();
  });

  it("Intentar agregar un item de navegación con el label vacío", () => {
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    screenShots.screenShot();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.addNavigationItemBtn.click({ force: true });
    screenShots.screenShot();
    /// Then
    designAdminPage.addNavigationLabelResponse.should(
      "include.text",
      "You must specify a label"
    );
    screenShots.screenShot();
  });
});
