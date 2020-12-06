
# Constructor web de pjecz.gob.mx

Archivos y directorios que por medio de [Pelican](https://blog.getpelican.com/) construyen el sitio web del [Poder Judicial del Estado de Coahuila de Zaragoza](https://www.pjecz.gob.mx).

## Crear entorno virtual Python en Windows

Abra una **línea de comandos** y cámbiese al directorio donde tiene su copia local de este repositorio

Sólo una vez habría la necesidad de crear el directorio `venv` con el entorno virtual

    python -m venv venv

Si ya está creada, la activamos con

    cd env\Scripts
    activate

E instalamos los paquetes **Pelican** y **Markdown** si no los tenemos

    pip install pelican markdown

## Construir versión local del sitio web

Para usar un tema específico, por ejemplo `pjecz-2020-10`, dentro del entono virtual ejecute

    pelican --delete-output-directory -t themes/pjecz-2020-10 content
    pelican --listen content

Y revise en su navegador

    http://127.0.0.1:8000

Termine con CTRL-C, haga cambios y repita.

## Construir el sitio web

En los servidores **Tierra** y **Justicia** se tienen las herramientas y los archivos para una construcción completa.

0. Con el par de llaves SSH ingrese al servidor con el usuario **constructor**

    ssh constructor@<DIRECCION_IP>

1. Sincronice los archivos de la rama que vaya actualizar (hace copia de Nextcloud al servidor al Google Storage)

    sincronizar-pjecz-sesiones.sh

2. Active el entorno virtual (donde están los comandos, insumos para Pelican y la configuración settings.ini)

    constructor-pjecz-gob-mx

3. Ejecute archivista con la orden crear y la rama (así se transforman los md de Nextcloud en md para Pelican)

    archivista crear --rama sesiones

4. Ejecute publicar (es un alias a Pelican para construir la versión de producción)

    publicar

5. Cámbiese al directorio donde está el repositorio pjecz.github.io

    cd ../pjecz.github.io

6. Ejecute los comandos GIT para revisar, juntar y subir las actualizaciones al hospedaje del sitio web

    git status
    git add -A
    git commit -m "Actualización de Sesiones."
    git push

Espere por lo menos cinco minutos para revisar los cambios en el sitio web.
