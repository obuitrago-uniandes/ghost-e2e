# Pruebas e2e en Ghost 3.41.1

## Equipo 20
|Integrantes|
|-|
|"Mery Alejandra Niño Gomez" <ma.ninog12@uniandes.edu.co>|
|"Walter Giovanny Cuadros Rincon" <w.cuadrosr@uniandes.edu.co>|
|"Oscar Andre Buitrago Villamil" <o.buitragov@uniandes.edu.co>|

## Funcionalidades bajo prueba
| Funcionalidad |
| -- |
| Configuración General (Título y descripción de la página) |
| Diseño (Administración de ítems de navegación) |
| Creación Tag |
| Administración de Post (CRUD) |
| Administración de Páginas (CRUD) |

## Escenarios de pruebas

| En Ghost 5.47 | Funcionalidad | Escenario | |
| -- | -- | -- | -- |
| * Kraken | Diseño | Agregar una nueva opción al menú de navegación | |
| * Kraken | Diseño | Eliminar la última opción del menú de navegación (recién creada) | |
| | Diseño | Editar un item de navegación cambiando el label a vacío | |
| | Diseño | Agregar un item de navegación con el label vacío | |
| | Crear Tag | Si el nombre está vacio no permite guardar y muestra alerta | |
| | Crear Tag | No permitir crear un tag con caracter "/" en el slug | |
| * Kraken | Crear Tag | Si la descripción tiene mas de 500 caracteres larga | |
| * Kraken | Crear Tag | Valida que el slug y el nombre sean iguales | |
| | Administración de Post | Crear post borrador | |
| | Administración de Post | No permitir guardar borrador de post con titulo con espacios | |
| * Cypress | Administración de Post | Seleccionar post y publicar | |
| | Administración de Post | Editar post | |
| * Cypress | Administración de Post | Crear Post | |
| * Cypress | Administración de Post | Eliminar Post | |
| * Cypress | Configuración General | Validar XSS en el título | |
| | Configuración General | Validar el cambio de título | |
| | Configuración General (falla) | Validar un título con comillas dobles | |
| * Cypress | Configuración General | Modificar la descripción del sitio | |
| * Kraken | Administración de Páginas | (Cypress) Como usuario creo una página con titulo y contenido borrador  | (Kraken) Como usuario creo una página con titulo|
| * Kraken | Administración de Páginas | (Cypress) Como usuario edito y publico el borrador de la página | (Kraken) Como usuario edito una página ya creada|
| | Administración de Páginas | (Cypress) Como usuario Valido en listado de páginas la pagina editada | (Kraken) Como usuario visualizo la pagina en la web|
| | Administración de Páginas | (Cypress) Como usuario elimino página | (Kraken) Como usuario creo una página con titulo y contenido vacios|
| | Administración de Páginas | (Cypress) Como usuario valido que la pagina eliminada no aparezca en el listado de paginas | (Kraken) Como usuario edito una página y le agrego titulo y contenido|

## Pasos para ejecutar Kraken

Las instrucciones para ejecutar kraken para versión 3.41.1 se encuentran en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e/tree/main/Ghost_3.41.1/kraken)

Las instrucciones para ejecutar kraken para versión 5.47.0 se encuentran en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e/tree/main/Ghost_5.47.0/kraken)

## Pasos para ejecutar Cypress

Las instrucciones para ejecutar cypress para versión 3.41.1 se encuentran en [En el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e/tree/main/Ghost_3.41.1/cypress)

Las instrucciones para ejecutar cypress para versión 5.47.0 se encuentran en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e/tree/main/Ghost_5.47.0/cypress)

## Pasos para ejecutar el comparador de imágenes

Los pasos para ejecutar el comparador de imágenes se encuentan en [el siguiente enlace](https://github.com/obuitrago-uniandes/ghost-e2e/tree/main/image-comparer)

## [Reporte obtenido](https://obuitrago-uniandes.github.io/ghost-e2e/Reporte/report.html) 


