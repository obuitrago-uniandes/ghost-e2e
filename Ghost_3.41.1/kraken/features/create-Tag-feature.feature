Feature: Crear Tags	

@user1 @web
Scenario: Si el nombre está vacio no permite guardar y muestra alerta
	Given I navigate to page "http://localhost:3001/ghost"
 	When I enter email "<USER>"
  	And I enter password "<PASSWORD>"
  	And I Sign In
	And I click Tag
	And I click New Tag
  	And I wait for 2 seconds 
	And I click save New Tag
	Then I validate error
	Then I send a signal to user 2 containing "Scenario Validate 1"
	And I wait for 3 seconds 
	
@user2 @web
Scenario: No permitir crear un tag con caracter "/" en el slug
	Given I wait for a signal containing "Scenario Validate 1" for 60 seconds
  	And I navigate to page "http://localhost:3001/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I click Tag
	And I click New Tag
	And I enter slug "Hola//"
	And I click save New Tag
  	And I wait for 2 seconds 
	Then I expect that delete the characters
	Then I send a signal to user 3 containing "Scenario Validate 2"
  	And I wait for 3 seconds 
	
@user3 @web
Scenario: Si la descripción tiene mas de 500 caracteres larga
	Given I wait for a signal containing "Scenario Validate 2" for 60 seconds
  	And I navigate to page "http://localhost:3001/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Tag
	And I click New Tag
	And I enter description Tag "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clasica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad en Virginia, encontró una de las palabras más oscuras de la lengua del latín, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum,  viene de una linea en la sección"
	And I wait for 2 seconds 
	And I click save New Tag
  	And I wait for 2 seconds 
	Then I expect have the max characters error
	Then I send a signal to user 4 containing "Scenario Validate 3"
  	And I wait for 3 seconds 


@user4 @web
Scenario: Valida que el slug y el nombre sean iguales
	Given I navigate to page "http://localhost:3001/ghost"
	When I enter email "<USER>"
	And I enter password "<PASSWORD>"
	And I Sign In
	And I wait for 2 seconds 
	And I click Tag
  	And I wait for 3 seconds 
	And I click New Tag
	And I enter name Tag "pagina1"
	And I click save New Tag
	Then Are Equals	
  	And I wait for 3 seconds 

