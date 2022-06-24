Title: Registro Estatal de Deudores Alimentarios
Slug: consultas-redam
URL: consultas/redam/
Save_As: consultas/redam/index.html
Date: 2022-06-08 12:50
Modified: 2022-06-08 12:50
JavaScripts: consultas-redam.js


<img class="img-fluid" src="encabezado.jpg" alt="REDAM">

### ¿Qué es el Registro Estatal de Deudores Alimentarios Morosos?

De acuerdo al **Artículo 308** de la **Ley de Familia** el **Poder Judicial** tendrá a su cargo la creación y manejo del **Registro Estatal de Deudores Alimentarios Morosos,** en el que se inscribirá a las personas que hayan dejado de cumplir sus obligaciones alimentarias de manera consecutiva o intermitentemente, ya sea en tres ocasiones en un periodo de tres meses, o, para el caso de las pensiones alimenticias que se deban cumplir de manera mensual, en tres ocasiones en un periodo de seis meses, decretadas por la autoridad judicial correspondiente.

Es necesario que la acreedora o acreedor reporte la incidencia de adeudo ante el juzgado familiar correspondiente, para que el órgano jurisdiccional registre a la persona deudora.

### Instrucciones: elija el Distrito Judicial, escriba parte del nombre y de clic en Consultar

<div id="buscarDiv" class="card mb-2">
    <div class="card-body">
        <form id="buscarForm">
            <div class="form-group">
                <label for="distritoSelect">Distrito Judicial:</label>
                <select id="distritoSelect" class="form-control"></select>
            </div>
            <div class="form-group">
                <label for="nombreInput">Nombre:</label>
                <input id="nombreInput" type="text" class="form-control" aria-describedby="nombreInputHelp">
                <small id="nombreInputHelp" class="form-text text-muted">No use acentos, eñes, diéresis o caracteres especiales.</small>
            </div>
            <input id="consultarButton" class="btn btn-primary" type="submit" value="Consultar">
            <button id="cargandoButton" class="btn btn-primary" type="button" style="display: none;" disabled>
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
<div id="resultadosDiv" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="resultadosDataTable" class="table" style="width: 100%;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Distrito</th>
                    <th>Juzgado</th>
                    <th>Nombre</th>
                    <th>Expediente</th>
                    <th>Fecha</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
