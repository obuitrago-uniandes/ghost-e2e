# Pruebas e2e en Ghost 3.41.1

## Funcionalidades bajo prueba
| Funcionalidad |
| -- |
| Configuración General (Título y descripción de la página) |
| Diseño (Administración de ítems de navegación) |
| Creación Tag |
| Administración de Post (CRUD) |
| Administración de Páginas (CRUD) |

## Escenarios de pruebas

| Funcionalidad | Escenario | |
| -- | -- | -- |
| Diseño | Agregar una nueva opción al menú de navegación | |
| Diseño | Eliminar la última opción del menú de navegación (recién creada) | |
| Diseño | Editar un item de navegación cambiando el label a vacío | |
| Diseño | Agregar un item de navegación con el label vacío | |
| Crear Tag | Si el nombre está vacio no permite guardar y muestra alerta | |
| Crear Tag | No permitir crear un tag con caracter "/" en el slug | |
| Crear Tag | Si la descripción tiene mas de 500 caracteres larga | |
| Crear Tag | Valida que el slug y el nombre sean iguales | |
| Administración de Post | Crear post vacio | |
| Administración de Post | No permitir guardar borrador de post con titulo con espacios | |
| Administración de Post | Crear post y publicar | |
| Administración de Post | Editar post | |
| Configuración General | Validar XSS en el título | |
| Configuración General | Validar el cambio de título | |
| Configuración General (falla) | Validar un título con comillas dobles | |
| Configuración General | Modificar la descripción del sitio | |
| Administración de Páginas | (Cypress) Como usuario creo una página con titulo y contenido borrador  | (Kraken) Como usuario creo una página con titulo y contenido|
| Administración de Páginas | (Cypress) Como usuario edito y publico el borrador de la página | (Kraken) Como usuario reviso que se visualice la pagina editada en el listado|
| Administración de Páginas | (Cypress) Como usuario Valido en listado de páginas la pagina editada | (Kraken) Como usuario visualizo la pagina en la web|
| Administración de Páginas | (Cypress) Como usuario elimino página | (Kraken) Como usuario creo una página con titulo y contenido vacios|
| Administración de Páginas | (Cypress) Como usuario valido que la pagina eliminada no aparezca en el listado de paginas | (Kraken) Como usuario edito una página y le agrego titulo y contenido|






