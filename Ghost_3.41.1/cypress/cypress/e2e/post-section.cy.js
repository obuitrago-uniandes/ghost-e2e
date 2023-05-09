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
      //And I go to Create Post
      postManage.createNewButton()
      //And I enter title
      postManage.fillTitle('(Untitled)');
      //And I back to list Post
      postManage.backPost()
      postManage.backPost()
      //Then I expect have to post with the same name "(Untitled)"
      cy.wait(2000);
      postManage.validateInList('(Untitled)')
      cy.wait(3000);
  })

  it('Scenario: No permitir guardar borrador de post con titulo con espacios', () => { 
    cy.wait(1000);
    //When I go section Post
    adminPage.clickPostBtn()
    //And I go to Create Post
    postManage.createNewButton()
    //And I enter title
    postManage.fillTitle('     ');
    //And I back to list Post
    postManage.backPost()
    cy.wait(1000);
  })

  it('Scenario: Crear post y publicar', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    //And I go to Create Tag
    postManage.createNewButton()
    //And I enter title
    postManage.fillTitle('PostC');
    //And I enter description
    postManage.fillDescription('PostC');
    //And I click publish 
    postManage.btnPublish()
    //And I click confirm publish 
    postManage.btnConfirmPublish()  
    //And I back to list Post
    postManage.backPost()
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
    postManage.validateInList('PostC')
    cy.wait(1000);

  })

  it('Scenario: Editar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    //And I go to Create Tag
    postManage.createNewButton()
    //And I enter title
    postManage.fillTitle('PostC');
    //And I enter description
    postManage.fillDescription('PostC');
    //And I back to list Post
    cy.wait(1000);
    postManage.backPost()
    cy.wait(1000);
    //And I edit Post
    postManage.editPost('PostC')
    //And I enter title
    postManage.fillTitle('PostM');
    //And I enter description
    postManage.fillDescription('PostM');
    //And I back to list Post
    postManage.backPost()
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
    postManage.validateInList('PostC')
  })


});
