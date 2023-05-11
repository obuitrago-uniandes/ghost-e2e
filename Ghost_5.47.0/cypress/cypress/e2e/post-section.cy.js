const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const postManage = require("../page/post.manage");

/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    //Given I navigate to page "http://localhost:3002/ghost/#/signin"
    cy.fixture("ghost.json").as("ghostData");
    cy.visit("/ghost/#/signin");
    cy.get("@ghostData").then((ghostData) => {
      loginPage
        .fillEmail(ghostData.email)
        .fillPassword(ghostData.password)
        .submit();
    });
    cy.viewport(1024, 1068)
    cy.wait(1000);
  });

  
  
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
    //And I click continue 
    postManage.btnContinue()
    //And I click confirm publish 
    postManage.btnConfirmPublish()    
    // An Back to editor
    postManage.btnBackEditor()    
    //And I back to list Post
    postManage.backPost()
    //I expect have to post with the same name "Post1"
    cy.wait(1000);
    postManage.validateInList('PostC')
    cy.wait(1000);

  })

  it('Scenario: eliminar post', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickPostBtn()
    cy.wait(1000);  
    postManage.selectFirst();
    cy.wait(1000);
    //And I got to setting
    postManage.seeSettings()
    //Bajar Scroll
    cy.scrollTo('bottom', { ensureScrollable: false })
    //cy.get('.settings-menu-container ').scrollTo('bottom')
    //And I delete Post
    postManage.deletePost()
    postManage.confirmDeletePost()
    
    cy.wait(1000);
  })

});
