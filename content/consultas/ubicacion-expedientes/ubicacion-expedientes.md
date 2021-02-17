Title: Versión Pública Ubicación de Expedientes
Summary: .
Slug: consultas-ubicacion-expedientes
URL: consultas/ubicacion-expedientes/
Save_As: consultas/ubicacion-expedientes/index.html
Date: 2021-02-17 14:22:00
Modified: 2021-02-17 14:22:00
JavaScripts: consultas-ubicacion-expedientes.js


<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../">Consultas</a></li>
        <li class="breadcrumb-item active" aria-current="page">Ubicación de Expedientes</li>
    </ol>
</nav>

## Instrucciones

<div class="card mb-2">
    <div class="card-body">
        <form id="ubicacionExpedientesForm">
            <div class="form-group">
                <label for="distritoSelect">Distrito:</label>
                <select id="distritoSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="autoridadSelect">Juzgado:</label>
                <select id="autoridadSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="expedienteInput">Número de expediente</label>
                <input id="expedienteInput" type="text" class="form-control" aria-describedby="expedienteInputHelp">
                <small id="expedienteInputHelp" class="form-text text-muted">No use acentos, eñes, diéresis o caracteres especiales.</small>
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
<div id="ubicacionExpedientes" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="ubicacionExpedientesTable" class="table" style="width: 100%;">
            <thead>
                <tr>
                    <th>Expediente</th>
                    <th>Ubicación</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
