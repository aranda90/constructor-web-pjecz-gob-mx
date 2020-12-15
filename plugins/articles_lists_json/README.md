Articles Lists JSON
===================

Create lists in JSON from articles and pages.

Instructions: Modify your pelicanconf.py or publishconf.py with

    PLUGIN_PATHS = ['plugins']
    PLUGINS = ['articles_lists_json']

Optionally

    ARTICLES_LISTS_JSON_OUTPUT_PATH = 'json'
    ARTICLES_LISTS_JSON_OUTPUT_ALL = 'all.json'
    ARTICLES_LISTS_JSON_CATEGORIES_FILTERS = [
        ('noticias.json', ('Comunicados', 'News Letters', 'Noticias')),
        ('sesiones.json', ('Sala Civil y Familiar', 'Sala Penal', 'Sala Regional')),
    ]
    ARTICLES_LISTS_JSON_LIMIT = 20
