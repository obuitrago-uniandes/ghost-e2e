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
      //When I go section Post
      adminPage.clickPostBtn()
      postManage.createNewButton()
      //And I enter title
      postManage.fillTitle(' ');
      cy.wait(1000);
      //And I back to list Post
      postManage.backPost()
      //Then I expect have to post with the same name "(Untitled)"
      cy.wait(1000);
      postManage.validateInList('(Untitled)')
      cy.wait(2000);
  })

  it('Scenario: No permitir guardar borrador de post con titulo con espacios', () => { 
    cy.wait(1000);
    //When I go section Post
    adminPage.clickPostBtn()
    postManage.createNewButton()
    //And I enter title
    postManage.fillTitle('Borrador');
    cy.wait(1000);
    //And I back to list Post
    postManage.backPost()
    cy.wait(1000);
    //And I go to Draf
    postManage.backDarfPost()
    cy.wait(1000);
  })

  it('Scenario: Crear post y publicar', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    postManage.editPost('Borrador');
    cy.wait(1000);
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()
    //I expect have to post with the same name "Post1"
    //And I back to list Post
    postManage.backPost()
    cy.wait(1000);

  })

  it('Scenario: Editar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    postManage.createNewButton()
    //And I enter title
    postManage.fillTitle('PostC');
    //And I back to list Post
    cy.wait(1000);
    postManage.backPost()
    cy.wait(1000);
    //And I edit Post
    postManage.editPost('PostC')
    //And I enter title
    postManage.fillTitle('PostM');
    //And I enter description
    //And I back to list Post
    postManage.backPost()
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
    postManage.validateInList('PostC')
  })


});
