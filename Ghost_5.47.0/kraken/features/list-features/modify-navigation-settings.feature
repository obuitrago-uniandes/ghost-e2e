Feature: Modificar Información Diseño

@user1 @web
Scenario: Intentar agregar un item de navegación con el label vacío
  Given I navigate to page "http://localhost:3002/ghost"
  And I have previously registered with "<USER>" and "<PASSWORD>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In