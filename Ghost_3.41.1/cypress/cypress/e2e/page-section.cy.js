const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const pageManage = require("../page/page.manage");
const screenShots = require("../page/screenshots");
/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    screenShots.incrementIndexScenario();
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    screenShots.screenShot();
    cy.wait(1000);
  });

  it("Scenario: Como usuario creo una página en borrador", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    screenShots.screenShot();
    //And Igo to Create Page
    pageManage.createButton();
    screenShots.screenShot();
    //And I click in title
    pageManage.titlePage();
    screenShots.screenShot();
    pageManage.contentPage();
    cy.go(-1);
    screenShots.screenShot();
    cy.wait(1000);
  });

  it("Scenario: Como usuario edito y publico el borrador de la página", () => {
    //When I go section pages
    cy.wait(1000);
    adminPage.clickPageBtn();
    screenShots.screenShot();
    //And I select draft
    pageManage.selectPage("(Untitled)");
    screenShots.screenShot();
    //And I enter title
    pageManage.fillTitlePage("Titulo pagina");
    screenShots.screenShot();
    //I clik in content
    pageManage.contentPage();
    screenShots.screenShot();
    cy.wait(1000);
    //And click on plus button
    pageManage.plusButton();
    screenShots.screenShot();
    //And select HTML card
    pageManage.cardHtml();
    screenShots.screenShot();
    cy.wait(1000);
    //And enter iframe in card HTML
    pageManage.textAreaHtml();
    screenShots.screenShot();
    //And click in publish
    pageManage.publishButton();
    screenShots.screenShot();
    //And click in publish now
    pageManage.publishNowButton();
    screenShots.screenShot();
    cy.wait(1000);
  });

  it("Scenario: Como usuario Valido en listado de páginas la pagina editada", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    screenShots.screenShot();
    //And I see that the item page is liked in list page
    pageManage.searchItemPage("Titulo pagina", 1);
    screenShots.screenShot();
  });

  it("Scenario: Como usuario elimino página", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    screenShots.screenShot();
    //And I select page
    pageManage.selectPage("Titulo pagina");
    screenShots.screenShot();
    cy.wait(1000);
    //And clic in settings
    pageManage.settingsButton();
    screenShots.screenShot();
    //And clic delete page
    pageManage.deleteButton();
    screenShots.screenShot();
    //And confirm delete page
    pageManage.confirmDeletePage();
    screenShots.screenShot();
  });

  it("Scenario: Como usuario valido que la pagina eliminada no aparezca en el listado de paginas", () => {
    //When I go section pages
    adminPage.clickPageBtn();
    screenShots.screenShot();
    //And I see that the item page is not liked in list page
    pageManage.searchItemPage("Titulo pagina", 0);
    screenShots.screenShot();
  });
});
