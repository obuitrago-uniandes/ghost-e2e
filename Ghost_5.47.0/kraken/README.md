# Instrucciones para ejecutar Kraken

Para la ejecución de las pruebas usamos la versión 14.21.3 de nodejs, y se siguieron las instrucciones de instalación dadas en la [página oficial de kraken](https://thesoftwaredesignlab.github.io/Kraken/)

## Requisitos

* Tener Docker instalado en su máquina.
* Ejecutar el siguiente contenedor que ejecuta la imagen de Ghost 5.47.0 y la expone a través del puerto 3002
```shell
docker run -d -e url=http://localhost:3002 -e NODE_ENV=development -p 3002:2368 --name ghost_5.47.0 ghost:5.47.0
```
* Haberse registrado en la herramienta Ghost y tener un usuario y contraseña de administrador.

## Herramientas usadas:
| Programa                        | Versión            |
| ------------------------------- | ------------------ |
| npm                             | 6.14.18            |
| Node                            | 14.21.3            |
| Windows                         | 11                 |
| Ubuntu                          | 22.04              |

## Pasos para la ejecución
1. Actualice el archivo `./kraken/properties.json` con las credenciales de acceso al Ghost local.
2. Abra una consola o terminal y ubíquese en la carpeta donde se encuentra este readme
3. Ejecute 
```shells
npm install
```
4. Copie el contenido de la carpeta `kraken-node-modif` que se encuentra en el root del directorio descargado en la carpeta `./node_modules/kraken-node` asegúrese de reemplazar los archivos. Nota copiar toda la carpeta lib, se deben reemplazar los dos archivos.
5. Asegúrese de copiar y pegar dentro del directorio `./kraken/features` la funcionalidad que desea probar. Puede encontrar el listado completo de funcionalidades en el directorio `./kraken/features/list-features`
6. Luego de asegurarse que exista un solo archivo con extensión `.feature` en el directorio `./kraken/features` Ejecute:
```shell
npx kraken-node run
```
