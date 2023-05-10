const loginPage = require("../page/login.page");
const adminPage = require("../page/admin.page");
const tagManage = require("../page/tag.manage");
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

  it('Scenario: Si el nombre está vacio no permite guardar y muestra alerta', () => {
      //When I go section Tag
      adminPage.clickTagBtn()
      screenShots.screenShot();
      //And I go to Create Tag
      tagManage.createNewButton()
      screenShots.screenShot();
      //And I save Tag
      tagManage.saveTag()
      screenShots.screenShot();
      //Then I validate error
      cy.wait(1000);
      tagManage.validateError()
      screenShots.screenShot();

      cy.wait(1000);
  })

  it('Scenario: Validar que el slug contenga caracteres especiales y se eliminen al guardar', () => { 
    cy.wait(1000);
    //When I go section tags
    adminPage.clickTagBtn()
    screenShots.screenShot();
    //And I go to Create Tag
    tagManage.createNewButton()
    screenShots.screenShot();
    //And I enter name
    tagManage.fillNameTag('tagnews');
    screenShots.screenShot();
    //And I enter slug
    tagManage.fillSlugTag('tagnews//');
    screenShots.screenShot();
    //And I click save tag
    cy.wait(1000);
    tagManage.fillSlugTag('tagnews');
    screenShots.screenShot();
    tagManage.saveTag();
    screenShots.screenShot();
    cy.wait(1000);
  })

  it('Scenario: Validar que genere error con una descripción mayor a 500', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn()
    screenShots.screenShot();
    //And I go to Create Tag
    tagManage.createNewButton()
    screenShots.screenShot();
    //And I enter description
    tagManage.fillDescripcionTag('Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clasica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad en Virginia, encontró una de las palabras más oscuras de la lengua del latín, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de por Cicero')
    screenShots.screenShot();
    //And I click save tag
    cy.wait(1000);
    tagManage.saveTag()
    screenShots.screenShot();
    //I expect have the max characters error
    cy.wait(1000);
    screenShots.screenShot();
    tagManage.maxCharacterError()
    screenShots.screenShot();
    cy.wait(1000);

  })

  it('Scenario: Validar que el nombre y Slug sean iguales', () => { 
    cy.wait(1000);
    //When I go section pages
    adminPage.clickTagBtn()
    screenShots.screenShot();
    //And I go to Create Tag
    tagManage.createNewButton()
    screenShots.screenShot();
    //And I enter name
    tagManage.fillNameTag('tagprueba');
    screenShots.screenShot();
    //And I enter name
    tagManage.fillDescripcionTag('tagprueba');
    screenShots.screenShot();
    cy.wait(1000);
    //And I validate are equals
    tagManage.validateSlug('tagprueba')
    screenShots.screenShot();
  })


});
