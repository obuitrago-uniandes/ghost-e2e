const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const postManage = require("../page/post.manage");
const screenShots = require("../page/screenshots")

/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    screenShots.incrementIndexScenario();
    screenShots.resetIndexStep();
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
      postManage.fillTitle(' ');
      screenShots.screenShot();
      cy.wait(1000);
      //And I back to list Post
      postManage.clickP()
      screenShots.screenShot();
      
  })

//Se Crea
  it('Scenario: Crear post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.createNewButton()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.fillTitle('Borrador');
    screenShots.screenShot();
    cy.go(-1)
    cy.wait(1000);
    //And I back to list Post
    postManage.clickP()
    screenShots.screenShot();
    cy.wait(1000);

  })

  //Se publica
  it('Scenario: Publicar publicar', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    screenShots.screenShot();
    cy.wait(1000);
    postManage.editPost('Borrador');
    screenShots.screenShot();
    cy.wait(1000);
    //And I click publish 
    postManage.btnPublish()
    screenShots.screenShot();
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    screenShots.screenShot();
    //And I back to list Post
    postManage.clickP()
    screenShots.screenShot();
    postManage.backPost()
    screenShots.screenShot();
    cy.wait(1000);

  })
  //Se edita
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
    postManage.clickP()
    screenShots.screenShot();
    postManage.backPost()
    screenShots.screenShot();
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
  })

  //Se elimina post
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



  it('Scenario: No permitir guardar borrador de post con titulo vacio', () => { 
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
    screenShots.screenShot();
    cy.wait(1000);
    //And I go to Draf
    postManage.backDarfPost()
    screenShots.screenShot();
    cy.wait(1000);
  })

  


});
