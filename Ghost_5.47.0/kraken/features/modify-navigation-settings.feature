Feature: Modificar Información Diseño

@user1 @web
Scenario: Intentar agregar un item de navegación con el label vacío
  Given I navigate to page "http://localhost:3002/ghost"
  And I have previously registered with "<USER>" and "<PASSWORD>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Settings page
  And I go to Navigation Settings page
  And I enter navigation label "The Software Design Lab"
  And I enter navigation url "https://thesoftwaredesignlab.github.io/"
  And I save design settings
  And I navigate to page "http://localhost:3002"
  Then I send a signal to user 2 containing "scenario 1 complete"
  And I expect to have a navigation menu item with "The Software Design Lab" value and link to "https://thesoftwaredesignlab.github.io/"
  And I wait for 3 seconds  

@user2 @web
Scenario: Eliminar la última opción del menú de navegación
  Given I wait for a signal containing "scenario 1 complete" for 60 seconds
  And I navigate to page "http://localhost:3002/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Settings page
  And I go to Navigation Settings page
  And I click on delete navigation item "The Software Design Lab"
  And I save design settings
  And I wait for 3 seconds  
  And I navigate to page "http://localhost:3002"
  Then I expect do not have a navigation menu item with "The Software Design Lab"  