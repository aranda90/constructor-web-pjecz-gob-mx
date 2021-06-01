
# Constructor web de pjecz.gob.mx

Archivos y directorios que por medio de [Pelican](https://blog.getpelican.com/) construyen el sitio web del [Poder Judicial del Estado de Coahuila de Zaragoza](https://www.pjecz.gob.mx).

## Crear entorno virtual Python en Windows

Abra una **línea de comandos** y cámbiese al directorio donde tiene su copia local de este repositorio

Sólo una vez habría la necesidad de crear el directorio `venv` con el entorno virtual

    python3 -m venv venv

Si ya está creada, la activamos en Windows con

    cd env\Scripts
    activate

En GNU/Linux con

    . venv/bin/activate

Actualize pip de ser necesario

    pip list
    pip install --upgrade pip

Instale los paquetes necesarios

    pip install -r requirements.txt

## Archivista

Cree el archivo de configuración settings.ini a partir del ejemplo settings-sample.ini

Use el cliente de escritorio Nextcloud o RClone para bajar los contenidos

Puede crear los contenidos de una rama en específico

    archivista crear --rama sesiones

O puede crear los contenidos de todas las ramas

    archivista crear --rama sesiones

## Construir versión local del sitio web

Ejecutar

    pelican --delete-output-directory --listen content

Para usar un tema específico, por ejemplo `pjecz-2020-10`, dentro del entono virtual ejecute

    pelican --delete-output-directory -t themes/pjecz-2020-10 content
    pelican --listen content

Y revise en su navegador

    http://127.0.0.1:8000

Termine con CTRL-C, haga cambios y repita.
