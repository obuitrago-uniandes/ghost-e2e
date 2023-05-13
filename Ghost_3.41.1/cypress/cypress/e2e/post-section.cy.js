const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const postManage = require("../page/post.manage");
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
        
      screenShots.screenShot();
      loginPage.submit();
    });
    screenShots.screenShot();
    cy.wait(1000);
  });


  it('Scenario: Crear post Borrador', () => {
    cy.wait(1000);
    //When I go section Post
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.createNewButton()
    screenShots.screenShot();
    cy.wait(1000);
    //And I enter title
    postManage.fillTitle('Borrador');
    cy.go(-1)
  })


  it('Scenario: Seleccionar post y Publicar', () => { 
    cy.wait(1000);
      //When I go section Post
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.selectFirst();
    screenShots.screenShot();
    //And I click publish 
    postManage.btnPublish()
    screenShots.screenShot();
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    screenShots.screenShot();
    cy.wait(1000);
    //Then I expect publish
    postManage.backPost();
    cy.go(-1)
    cy.wait(1000);
  })


  
  it('Scenario: eliminar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()  
    screenShots.screenShot();
    cy.wait(1000);  
    postManage.selectFirst();
    screenShots.screenShot();
    cy.wait(1000);
    //And I got to setting
    postManage.seeSettings()
    screenShots.screenShot();
    //And I delete Post
    postManage.deletePost()
    screenShots.screenShot();
    
    postManage.confirmDeletePost()
    screenShots.screenShot();
    cy.wait(1000);
  })

  
  it('Scenario: No Permitir guardar borrador de post con titulo vacio', () => { 
    cy.wait(1000);
    //When I go section Post
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.createNewButton()
    screenShots.screenShot();
    cy.wait(1000);
    //And I back to list Post
    postManage.backPost()
    cy.go(-1)
    cy.wait(1000);
    //And I go to Draf
    postManage.backDarfPost()
    cy.wait(1000);
  })

  it('Scenario: Crear post vacio', () => {
      cy.wait(1000);
      //When I go section Post
      adminPage.clickPostBtn()
      screenShots.screenShot();
      cy.wait(1000);
      postManage.createNewButton()
      screenShots.screenShot();
      cy.wait(1000);
      //And I enter title
      postManage.fillTitle('        ');
      postManage.clickP();
  })


  it('Scenario: Editar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()  
    screenShots.screenShot();
    cy.wait(1000);
    postManage.selectFirst();
    screenShots.screenShot();
    cy.wait(1000);
    //And I enter title
    postManage.fillTitle('PostM');
    screenShots.screenShot();
    //And I back to list Post
    postManage.clickP();
    cy.wait(1000);
    cy.go(-1)
    postManage.validateInList('PostM')
    cy.wait(1000);
  })


});
