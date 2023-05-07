Feature: Post

@user1 @web
Scenario: Crear post vacio
	Given I navigate to page "http://localhost:2368/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Post
	And I click New Post
	And I enter titulo Post ""
	And I enter description Post ""
	And I back to list Post
	Then I expect have to post with the same name "(Untitled)"
	Then I send a signal to user 2 containing "Scenario Validate 1"
	And I wait for 4 seconds


@user2 @web
Scenario: No permitir guardar borrador de post con titulo con espacios
	Given I wait for a signal containing "Scenario Validate 1" for 60 seconds
  	And I navigate to page "http://localhost:2368/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Post
	And I click New Post
	And I enter titulo Post "     "
	And I back to list Post
	Then I send a signal to user 3 containing "Scenario Validate 2"
	And I wait for 4 seconds

@user3 @web
Scenario: Crear post y publicar
	Given I wait for a signal containing "Scenario Validate 2" for 60 seconds
  	And I navigate to page "http://localhost:2368/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Post
	And I click New Post
	When I enter titulo Post "Post1"
	And I enter description Post "Post"
	Then I click preview
	Then I click publish
	Then I click continue
	Then I click confirm publish
	Then I expect have to post with the same name "Post1"
	Then I send a signal to user 4 containing "Scenario Validate 3"
	And I wait for 2 seconds


@user4 @web
Scenario: Editar post 
	Given I navigate to page "http://localhost:2368/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Post
	And I click New Post
	When I enter titulo Post "Post2"
	When I enter description Post "Post2"
	And I back to list Post
	Then I expect have to post with the same name "Post2"
	And I wait for 2 seconds
	And I edit Post
	When I enter titulo Post "Post Editado"
	When I enter description Post "Post Editado"
	Then I back to list Post
	Then I expect have to post with the same name "Post Editado"
	And I wait for 2 seconds
