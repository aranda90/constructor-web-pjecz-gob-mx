Title: Lista de Peritos
Summary: La lista de Peritos en los términos de la Ley Orgánica del Poder Judicial del Estado.
Slug: consultas-peritos
URL: consultas/peritos/
Save_As: consultas/peritos/index.html
Date: 2021-02-22 13:00:00
Modified: 2021-02-22 13:00:00
JavaScripts: consultas-peritos.js

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../">Consultas</a></li>
        <li class="breadcrumb-item active" aria-current="page">Peritos</li>
    </ol>
</nav>

## Instrucciones
1. Favor de seleccionar el **Distrito Judicial** (lista desplegable con los 8 distritos).
2. Escriba parte del nombre; preferentemente los apellidos paterno y materno.
3. Posteriormente presione el botón **Consultar** y espere a que se carguen el listado de peritos.
4. Para filtrar los datos de la búsqueda favor de ingresar el Distrito, Tipo o Nombre en la opción **Filtrar** .

<div class="card mb-2">
    <div class="card-body">
        <form id="peritosForm">
            <div class="form-group">
                <label for="distritoSelect">Distrito:</label>
                <select id="distritoSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="nombreInput">Nombre:</label>
                <input id="nombreInput" type="text" class="form-control" aria-describedby="nombreInputHelp">
                <small id="nombreInputHelp" class="form-text text-muted">No use acentos, eñes, diéresis o caracteres especiales.</small>
            </div>
            <button id="consultarButton" type="button" class="btn btn-primary">
                Consultar
            </button>
            <button id="cargandoButton" class="btn btn-primary" type="button"  style="display: none;" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Cargando...
            </button>
        </form>
    </div>
</div>

<div id="revisarParametros" class="card mb-2" style="display: none;">
    <div class="card-body">
        <div id="revisarParametrosAlert" class="alert alert-primary" role="alert"></div>
    </div>
</div>
<div id="sinResultados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <div id="sinResultadosAlert" class="alert alert-warning" role="alert"></div>
    </div>
</div>
<div id="peritosRegistrados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="peritosRegistradosTable" class="table" style="width: 100%;">
            <thead>
                <tr>
                    <th>Distrito</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                </tr>
            </thead>
        </table>
    </div>
</div>