Feature: Modificar Información General

@user1 @web
Scenario: Validar XSS en el título
  Given I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to General Settings page
  And I expand Title & description section
  And I enter title "</title><script>var a = 1;</script><title>"
  And I save general settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I send a signal to user 2 containing "scenario 1 complete"
  And I expect to get site title "</title><script>var a = 1;</script><title>"
  And I wait for 3 seconds

@user2 @web
Scenario: Configurar un título
  Given I wait for a signal containing "scenario 1 complete" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to General Settings page
  And I expand Title & description section
  And I enter title "Un título común"
  And I save general settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I send a signal to user 3 containing "scenario 2 complete"
  And I expect to get site title "Un título común"
  And I wait for 3 seconds
  
@user3 @web
Scenario: Configurar un título con comillas dobles
  Given I wait for a signal containing "scenario 2 complete" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to General Settings page
  And I expand Title & description section
  And I enter title "\"Título con comillas\""
  And I save general settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I send a signal to user 4 containing "scenario 3 complete"
  And I expect to get site title "\"Título con comillas\""
  And I wait for 3 seconds

@user4 @web
Scenario: Modificar la descripción del sitio
  Given I wait for a signal containing "scenario 3 complete" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I Sign In
  And I go to General Settings page
  And I expand Title & description section
  And I enter description "Detestable (adjective): software that isn't testable."
  And I save general settings
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368"
  Then I expect to get site description "Detestable (adjective): software that isn't testable."
  And I wait for 3 seconds
