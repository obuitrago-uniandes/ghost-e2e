Feature: Creación y edición de páginas


@user1 @web
Scenario: Como usuario creo una página con titulo
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I go to Create Page
  And I click on title
  And I enter title page
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I click on publish  
  And I wait for 1 seconds
  And I click on continue now
  And I wait for 1 seconds
  And I click on right now
  And I click on back editor
  And I wait for 2 seconds
  And I go to back page list
  And I wait for 10 seconds
  And I see that the item page is liked in list page
  And I wait for 2 seconds
  Then I send a signal to user 2 containing "create_page"
 

@user2 @web
Scenario: Como usuario creo una página con titulo
  Given I wait for a signal containing "create_page" for 120 seconds
  And I navigate to page "http://localhost:3002/ghost/#/signin"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I Sign In
  And I wait for 1 seconds
  And I go to section pages
  And I wait for 1 seconds
  And I click on page created
  And I enter title edit "Titulo actualizado"
  And I wait for 1 seconds
  And I click on content
  And I wait for 1 seconds
  And I enter content
  And I wait for 1 seconds
  And I click on update
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I wait for 1 seconds
  And I go to back page list
  And I wait for 1 seconds
  And I see that the item page is liked edit in list page
  And I wait for 2 seconds
