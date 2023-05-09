const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const postManage = require("../page/post.manage");

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

  it('Scenario: Crear post vacio', () => {
      cy.wait(1000);
      //When I go section Post
      adminPage.clickPostBtn()
      cy.wait(1000);
      postManage.createNewButton()
      cy.wait(1000);
      //And I enter title
      postManage.fillTitle(' ');
      cy.wait(1000);
      //And I back to list Post
      postManage.clickP()
      
  })

//Se Crea
  it('Scenario: Crear post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    cy.wait(1000);
    postManage.createNewButton()
    cy.wait(1000);
    postManage.fillTitle('Borrador');
    cy.wait(1000);
    //And I back to list Post
    postManage.clickP()
    cy.wait(1000);

  })

  //Se publica
  it('Scenario: Publicar publicar', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    cy.wait(1000);
    postManage.editPost('Borrador');
    cy.wait(1000);
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    //And I back to list Post
    postManage.clickP()
    postManage.backPost()
    cy.wait(1000);

  })
  //Se edita
  it('Scenario: Editar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()  
    cy.wait(1000);
    postManage.selectFirst();
    cy.wait(1000);
    //And I enter title
    postManage.fillTitle('PostM');
    //And I back to list Post
    postManage.clickP()
    postManage.backPost()
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
  })

  //Se elimina post
  it('Scenario: eliminar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()  
    cy.wait(1000);  
    postManage.selectFirst();
    cy.wait(1000);
    //And I got to setting
    postManage.seeSettings()
    //And I delete Post
    postManage.deletePost()
    postManage.confirmDeletePost()
    
    cy.wait(1000);
  })



  it('Scenario: No permitir guardar borrador de post con titulo vacio', () => { 
    cy.wait(1000);
    //When I go section Post
    adminPage.clickPostBtn()
    cy.wait(1000);
    postManage.createNewButton()
    cy.wait(1000);
    //And I back to list Post
    postManage.backPost()
    cy.wait(1000);
    //And I go to Draf
    postManage.backDarfPost()
    cy.wait(1000);
  })

  


});
