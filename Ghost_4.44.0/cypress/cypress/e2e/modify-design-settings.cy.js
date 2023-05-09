const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const designAdminPage = require("../page/design.admin.page");
const principalPage = require("../page/principal.page");

/// <reference types="cypress" />

context("Modificar Información de diseño", () => {
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

  it("Agregar una nueva opción al menú de navegación", () => {
    const label = "The Software Design Lab";
    const url = "https://thesoftwaredesignlab.github.io/";
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    /// And I enter navigation label "The Software Design Lab"
    designAdminPage.addNavigationLabelInput.clear({ force: true }).type(label);
    /// And I enter navigation url "https://thesoftwaredesignlab.github.io/"
    designAdminPage.addNavigationUrlInput.clear({ force: true }).type(url);
    /// And I save design settings
    designAdminPage.saveDesignSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// Then I expect to get site title equals to title entered
    principalPage.getMenuItem(label).should("have.attr", "href", url);
  });

  it("Eliminar la última opción del menú de navegación (recién creada)", () => {
    const label = "The Software Design Lab";
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.deleteLastNavigationItemBtn.click({ force: true });
    /// And I save design settings
    designAdminPage.saveDesignSettings();
    /// And I navigate to home page
    principalPage.visit();
    /// expect do not have a navigation menu item with "The Software Design Lab"
    principalPage.getMenuItem(label).should("not.exist");
  });

  it("Intentar editar un item de navegación cambiando el label a vacío", () => {
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.lastNavigationLabelInput.clear({ force: true });
    /// And I save design settings
    designAdminPage.saveFailedDesignSettings();
    /// Then
    designAdminPage.lastNavigationLabelResponse.should(
      "include.text",
      "You must specify a label"
    );
  });

  it("Intentar agregar un item de navegación con el label vacío", () => {
    /// When I go to Design Settings page
    adminPage.clickDesignBtn();
    /// And I click on delete navigation item "The Software Design Lab"
    designAdminPage.addNavigationItemBtn.click({ force: true });
    /// Then
    designAdminPage.addNavigationLabelResponse.should(
      "include.text",
      "You must specify a label"
    );
  });
});
