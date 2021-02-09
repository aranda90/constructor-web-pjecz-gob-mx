Title: Abogados Registrados
Summary: Las y los abogados registrados en el Poder Judicial del estado de Coahuila de Zaragoza.
Slug: consultas-abogados-registrados
URL: consultas/abogados-registrados/
Save_As: consultas/abogados-registrados/index.html
Date: 2020-06-17 10:42:00
Modified: 2021-02-08 20:00:00
JavaScripts: consultas-abogados-registrados.js


<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../">Consultas</a></li>
        <li class="breadcrumb-item active" aria-current="page">Abogados registrados</li>
    </ol>
</nav>

## Instrucciones

1. Seleccione el año de registro.
2. Opcionalmente puede escribir parte del nombre.
3. Presione el botón **Consultar** y espere a que se carguen los abogados registrados. Tiene un límite de 100 resultados.
4. Puede usar el campo **Filtrar** para encontrar algo específico en los resultados.

<div class="card mb-2">
    <div class="card-body">
        <form id="abogadosForm">
            <div class="form-group">
                <label for="anoSelect">Año de registro</label>
                <select id="anoSelect" class="form-control">
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
            </div>
            <div class="form-group">
                <label for="nombreInput">Nombre</label>
                <input id="nombreInput" type="text" class="form-control" aria-describedby="nombreInputHelp">
                <small id="nombreInputHelp" class="form-text text-muted">No use acentos, eñes y caracteres especiales.</small>
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
<div id="sinResultados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <div id="sinResultadosAlert" class="alert alert-warning" role="alert">
            No se encontraron abogados registrados con las opciones dadas.
        </div>
    </div>
</div>
<div id="abogadosRegistrados" class="card mb-2" style="display: none;">
    <div class="card-body">
        <table id="abogadosRegistradosTable" class="table" style="width: 100%;">
            <thead>
                <th>libro</th>
                <th>nombre</th>
                <th>fecha</th>
                <th>estatus</th>
                <th>numero</th>
                <th>id</th>
            </thead>
        </table>
    </div>
</div>
