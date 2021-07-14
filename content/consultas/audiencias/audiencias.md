Title: Agenda de Adiencias
Summary: Actuaciones que realiza diariamente el Poder Judicial del Estado de Coahuila de Zaragoza y que por ley de acuerdo al Código Procesal Civil deben de ser publicadas; en donde se incluyen autos, acuerdos, sentencias, exhortos y audiencias.
Slug: consultas-audiencias
URL: consultas/audiencias/
Save_As: consultas/audiencias/index.html
Date: 2020-05-11 16:00
Modified: 2020-05-20 12:32
JavaScripts: consultas-audiencias.js
Stylesheets: consultas-audiencias.css


<div id='consultas'>
  <div class="container" style="overflow:auto;" >
        <h1 id="consultaDistrito"></h1>
        <h2 id="consultaJuzgado"></h2>
  </div>
  <div class="container d-flex justify-content-center" style="overflow:auto;" >
    <button id="divcargando" class="btn btn-lg btn-light"  type="button" disabled>
      <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
      Cargando...
    </button>
  </div>
  <div class="container" id="distritos" style="overflow:auto;" >
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
            </div>
            <input id="search-distrito" type="text" class="form-control" placeholder="Distrito" aria-describedby="basic-addon1">
        </div>
        <span class="list-countDistritos"></span>
        <ul class ="titleDistritos-ul ul list-group" id="listDistritos">
        </ul>
  </div>
  <div class="container" id="autoridades"  style="overflow:auto;" >
        <button id="btnbackDistritos" type="button" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i>  Distritos</button>
        <br><br>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
            </div>
            <input id="search-autoridad" type="text" class="form-control" placeholder="Autoridad" aria-describedby="basic-addon2">
        </div>
        <span class="list-countAutoridades"></span>
        <ul class ="titleAutoridades-ul ul list-group" id="listAutoridades">
        </ul>
  </div>
</div>
  <div class="container" id="tablaResultado" style="overflow:auto;" >
        <button id="btnbackAutoridades" type="button" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i>  Autoridades</button>
        <br><br>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="anio">Cambiar año de consulta:</label>
          </div>
          <div class="col-auto">
            <select class="form-control" id="anio"></select>
          </div>
        </div>
        <br><br>
        <table id="ListasTable" class="table table-striped table-bordered" style="width:100%">
          <thead>
            <tr>
            <th>Tiempo</th>
            <th>Tipo Audiencia</th>
            <th>Expediente</th>
            <th>Actores</th>
            <th>Demandados</th>
            <th>Sala</th>
            <th>Caracter</th>
            <th>Causa Penal</th>
            <th>Delitos</th>
            <th>Toca</th>
            <th>Expediente Origen</th>
            <th>Imputados</th>
            <th>Origen</th>
            </tr>
          </thead>
      </table>
  </div>

