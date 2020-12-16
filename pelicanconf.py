#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# Tema
THEME = 'themes/pjecz-2020-10'

# Para desarrollo
SITEURL = 'http://localhost:8000'
RELATIVE_URLS = True

# Metadatos de todo el sitio web
SITENAME = 'Poder Judicial del Estado de Coahuila de Zaragoza'
SITELOGO = 'theme/images/pjecz.png'
SITEPREVIEW = 'theme/images/generic.jpg'
SITEDESCRIPTION = 'Responsables de impartir justicia en el Estado, de dirimir diferencias entre particulares, de conciliar, y de promover con el ejemplo una cultura de la legalidad y justicia cotidiana.'
SITETWITTER = '@PJCoah'

# Autor por defecto
AUTHOR = 'PJECZ'

# Directorio donde esta el contenido
PATH = 'content'

# Directorios que tienen los articulos
ARTICLE_PATHS = [
    'acuerdos-del-consejo',
    'comunicados',
    'news-letters',
    'noticias',
    'sesiones',
]

# Directorios que tienen páginas fijas, no artículos
PAGE_PATHS = [
    'armonizacion-contable',
    'aviso-de-privacidad',
    'boletines-judiciales',
    'buzon-electronico',
    'calendario-de-labores',
    'citas',
    'comisiones',
    'conocenos',
    'consultas',
    'derechos-humanos-e-igualdad-de-genero',
    'edictos-de-declaracion-de-ausencia',
    'licencias',
    'magistrados',
    'observatorio-judicial',
    'podcasts',
    'politicas-de-uso',
    'tramites-y-servicios',
    'transparencia',
    'transparencia-tca',
]

# Directorios y archivos que son fijos
# Agregue también los directorios que tienen archivos para artículos y páginas
STATIC_PATHS = [
    'acuerdos-del-consejo',
    'armonizacion-contable',
    'boletines-judiciales',
    'buzon-electronico',
    'calendario-de-labores',
    'citas',
    'comisiones',
    'comunicados',
    'conocenos',
    'consultas',
    'derechos-humanos-e-igualdad-de-genero',
    'edictos-de-declaracion-de-ausencia',
    'json',
    'magistrados',
    'news-letters',
    'noticias',
    'observatorio-judicial',
    'sesiones',
    'tramites-y-servicios',
    'transparencia',
    'transparencia-tca',
    'CNAME',
    'favicon.ico',
    'robots.txt',
]

# Para evitar que se hagan summary automaticos
SUMMARY_MAX_LENGTH = 0

# NO usar el directorio como la categoria
USE_FOLDER_AS_CATEGORY = False

# Los artículos van en directorios por /categoria/YYYY/slug/
ARTICLE_URL = '{category}/{date:%Y}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{date:%Y}/{slug}/index.html'

# En cada pagina debe haber metadatos url y save_as
# por lo que no necesitamos esto
# PAGE_URL = 'directorio/directorio/'
# PAGE_SAVE_AS = 'directorio/directorio/index.html'

# Lenguaje y zona horaria
DEFAULT_LANG = 'es'
TIMEZONE = 'America/Monterrey'

# Formato para las fechas d) dia, B) nombre del mes, Y) año
DEFAULT_DATE_FORMAT = '%d de %B de %Y'

# Feeds
FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = None
FEED_ALL_RSS = 'feeds/all.rss.xml'
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
CATEGORY_FEED_ATOM = None
CATEGORY_FEED_RSS = 'feeds/{slug}.rss.xml'
TAG_FEED_ATOM = None
TAG_FEED_RSS = None
TRANSLATION_FEED_ATOM = None
TRANSLATION_FEED_RSS = None
FEED_MAX_ITEMS = 48
RSS_FEED_SUMMARY_ONLY = True

# NO BORRAR de output los siguientes directorios y archivos
OUTPUT_RETENTION = ['.git', '.gitignore']

# Paginacion
# DEFAULT_PAGINATION = False
DEFAULT_PAGINATION = True
DEFAULT_PAGINATION = 6
DEFAULT_ORPHANS = 2

# Plugins
PLUGIN_PATHS = ['plugins']
PLUGINS = ['articles_lists_json', 'pelican_javascript']

# Articles Lists JSON
ARTICLES_LISTS_JSON_OUTPUT_PATH = 'json'
ARTICLES_LISTS_JSON_OUTPUT_ALL = 'all.json'
ARTICLES_LISTS_JSON_CATEGORIES_FILTERS = [
    ('noticias.json', ['noticias']),
]
ARTICLES_LISTS_JSON_LIMIT = 48

# Mantener lo viejo en el directorio de salida
DELETE_OUTPUT_DIRECTORY = False

# Activar el caché
LOAD_CONTENT_CACHE = True

# NO hay cargas de dependencias de Internet
USE_REMOTE_SERVICES = False
