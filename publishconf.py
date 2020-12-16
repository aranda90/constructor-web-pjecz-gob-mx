#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# Para producción los URLs son absolutos
SITEURL = 'https://www.pjecz.gob.mx'
RELATIVE_URLS = False

# BORRAR todo el directorio de salida
DELETE_OUTPUT_DIRECTORY = True

# DESACTIVAR el caché
LOAD_CONTENT_CACHE = False

# HABILITAR dependencias desde Internet
USE_REMOTE_SERVICES = True
GOOGLE_ANALYTICS = 'UA-164475591-1'
