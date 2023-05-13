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
    cy.viewport(1024, 1068)
    cy.wait(1000);
  });

  
  
  it('Crear post Borrador', () => {
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
    cy.wait(1000);
  })


  it('Seleccionar post y publicar', () => { 
    cy.wait(1000);

    //When I go section pages
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.selectFirst();
    screenShots.screenShot();
    cy.wait(1000);
    //And I click publish 
    postManage.btnPublish()
    screenShots.screenShot();
    //And I click continue 
    postManage.btnContinue()
    //And I click confirm publish 
    postManage.btnConfirmPublish()   
    screenShots.screenShot(); 
    // An Back to editor
    postManage.btnBackEditor()   
    //And I back to list Post
    postManage.backPost()
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

});
