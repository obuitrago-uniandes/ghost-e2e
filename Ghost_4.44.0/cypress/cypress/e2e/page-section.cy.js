const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const pageManage = require("../page/page.manage");

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
    cy.wait(1000);
  });

  it('Scenario: Como usuario creo una página en borrador', () => {
      //When I go section pages
      adminPage.clickPageBtn();
      //And Igo to Create Page
      pageManage.createButton()
      //And I click in title
      pageManage.titlePage()
      pageManage.contentPage()
      cy.go(-1)
      cy.wait(1000);
  })

  it('Scenario: Como usuario edito y publico el borrador de la página', () => { 
      //When I go section pages
      cy.wait(1000);
      adminPage.clickPageBtn();
      //And I select draft
      pageManage.selectPage('(Untitled)');
      //And I enter title
      pageManage.fillTitlePage('Titulo pagina');
      //I clik in content 
      pageManage.contentPage()
      cy.wait(1000);
      //And click on plus button
      pageManage.plusButton();
      //And select HTML card
      pageManage.cardHtml();
      cy.wait(1000);
      //And enter iframe in card HTML
      pageManage.textAreaHtml();
      //And click in publish
      pageManage.publishButton();
      //And click in publish now
      pageManage.publishNowButton();
      cy.wait(1000);
  })

  it('Scenario: Como usuario Valido en listado de páginas la pagina editada', () => { 
    //When I go section pages
    adminPage.clickPageBtn();
    //And I see that the item page is liked in list page
    pageManage.searchItemPage('Titulo pagina',1)

  })


  it('Scenario: Como usuario elimino página', () => { 
    //When I go section pages
    adminPage.clickPageBtn();
    //And I select page
    pageManage.selectPage('Titulo pagina');
    cy.wait(1000);
    //And clic in settings
    pageManage.settingsButton();
    //And clic delete page
    pageManage.deleteButton();
    //And confirm delete page
    pageManage.confirmDeletePage();
  })

  it('Scenario: Como usuario valido que la pagina eliminada no aparezca en el listado de paginas', () => { 
    //When I go section pages
    adminPage.clickPageBtn();
    //And I see that the item page is not liked in list page
    pageManage.searchItemPage('Titulo pagina',0)

  })

});
