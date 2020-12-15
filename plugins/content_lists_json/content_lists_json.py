"""
Content Lists JSON
==================

Create lists in JSON from articles and pages.
"""

import json
from bs4 import BeautifulSoup
from pathlib import Path
from pelican import signals


class Content_Lists_JSON_Generator(object):

    def __init__(self, context, settings, path, theme, output_path, *null):
        self.output_path = output_path
        self.context = context
        self.siteurl = settings.get('SITEURL')
        self.relative_urls = settings.get('RELATIVE_URLS')
        self.output_path = output_path
        self.json_nodes = []

    def crear_nodo_json(self, page):
        """ Crear nodo JSON """
        # Descartar si no está publicado
        if getattr(page, 'status', 'published') != 'published':
            return
        # Obtener título
        soup_title = BeautifulSoup(page.title.replace('&nbsp;', ' '), 'html.parser')
        page_title = soup_title.get_text(' ', strip=True).replace('“', '"').replace('”', '"').replace('’', "'").replace('^', '&#94;')
        # Obtener categoría
        page_category = page.category.name if getattr(page, 'category', 'None') != 'None' else ''
        # Determinar resumen
        page_summary = page.summary if getattr(page, 'summary', 'None') != 'None' else ''
        # Determinar URL
        page_url = '.'
        if page.url:
            page_url = page.url if self.relative_urls else (self.siteurl + '/' + page.url)
        # Diccionario con el nodo
        node = {
            'title': page_title,
            'category': page_category,
            'url': page_url,
        }
        # Acumular
        self.json_nodes.append(node)

    def generate_output(self, writer):
        """ Generate output """
        ruta = Path(self.output_path, 'json/all.json')
        # Juntar
        for page in self.context['articles']:
            self.crear_nodo_json(page)
        root_node = {'pages': self.json_nodes}
        # Guardar
        with open(path, 'w', encoding='utf-8') as puntero:
            puntero.write(root_node)


def get_generators(generators):
    """ Get generators """
    return Content_Lists_JSON_Generator


def register():
    """ Register """
    signals.get_generators.connect(get_generators)
