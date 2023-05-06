Feature: Modificar Información Diseño

@user1 @web
Scenario: Agregar una nueva opción al menú de navegación 
  Given I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Design Settings page
  And I enter navigation label "The Software Design Lab"
  And I enter navigation url "https://thesoftwaredesignlab.github.io/"
  And I save design settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I send a signal to user 2 containing "scenario 1 complete"
  And I expect to have a navigation menu item with "The Software Design Lab" value and link to "https://thesoftwaredesignlab.github.io/"
  And I wait for 3 seconds

@user2 @web
Scenario: Eliminar la última opción del menú de navegación
  Given I wait for a signal containing "scenario 1 complete" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Design Settings page
  And I click on delete navigation item "The Software Design Lab"
  And I save design settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I send a signal to user 3 containing "scenario 2 complete"
  And I expect do not have a navigation menu item with "The Software Design Lab"  
  And I wait for 3 seconds

@user3 @web
Scenario: Intentar editar un item de navegación cambiando el label a vacío
  Given I wait for a signal containing "scenario 2 complete" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Design Settings page
  And I clean Last Navigation Item
  And I save design settings
  And I wait for 3 seconds
  Then I send a signal to user 4 containing "scenario 3 complete"
  And I expect see error on last navigation label "You must specify a label"
  And I wait for 3 seconds

@user4 @web
Scenario: Intentar agregar un item de navegación con el label vacío
  Given I wait for a signal containing "scenario 3 complete" for 90 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to Design Settings page
  And I click in add item to navigation
  And I save design settings
  And I wait for 3 seconds
  Then I expect see error on new navigation label "You must specify a label"
  And I wait for 3 seconds