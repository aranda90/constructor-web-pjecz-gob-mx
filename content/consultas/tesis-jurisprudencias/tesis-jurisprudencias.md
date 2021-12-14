Title: Tesis y Jurisprudencias.
Summary: .
Slug: tesis-jurisprudencias
URL: consultas/tesis-jurisprudencias/
Save_As: consultas/tesis-jurisprudencias/index.html
Date: 2021-12-13 10:08:00
Modified: 2021-12-13 10:08:00
JavaScripts: consultas-tesis-jurisprudencias.js
Stylesheets: consultas-tesis-jurisprudencias.css


<div id='consultas'>
  <div class="container" style="overflow:auto;" >
    <h2 id="consultaJuzgado"></h2>
  </div>
  <div class="container d-flex justify-content-center" style="overflow:auto;" >
    <button id="divcargando" class="btn btn-lg btn-light"  type="button" disabled>
      <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
      Cargando...
    </button>
  </div>
  <div class="container" id="autoridades" style="overflow:auto;" >
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
  <div class="container" id="tablaResultado" style="overflow:auto;" >
    <button id="btnbackAutoridades" type="button" class="btn btn-secondary">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      Autoridades
    </button>
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
          <th>No. de registro digital</th>
          <th>Fecha de aprobación</th>
          <th>Título</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="container" id="tablaDetalle" style="overflow:auto;" >
    <h2 id="detalleTitulo"></h2>
    <table id="ListasTable" class="table table-striped table-bordered" style="width:100%">
      <tbody>
        <tr>
          <th>Número de registro digital</th>
          <td><span id="detalleRegistro"></span></td>
        </tr>
        <tr>
          <th>Subtítulo</th>
          <td><span id="detalleSubtitulo"></span></td>
        </tr>
        <tr>
          <th>Organizacion</th>
          <td><span id="detalleDistrito"></span></td>
        </tr>
        <tr>
          <th>Autoridad</th>
          <td><span id="detalleAutoridad"></span></td>
        </tr>
        <tr>
          <th>Tipo</th>
          <td><span id="detalleTipo"></span></td>
        </tr>
        <tr>
          <th>Clave de Control</th>
          <td><span id="detalleClaveControl"></span></td>
        </tr>
        <tr>
          <th>Clase</th>
          <td><span id="detalleClase"></span></td>
        </tr>
        <tr>
          <th>Rubro</th>
          <td><span id="detalleRubro"></span></td>
        </tr>
        <tr>
          <th>Texto</th>
          <td><span id="detalleTexto"></span></td>
        </tr>
        <tr>
          <th>Precedentes</th>
          <td><span id="detallePrecedentes"></span></td>
        </tr>
        <tr>
          <th>Votacion</th>
          <td><span id="detalleVotacion"></span></td>
        </tr>
        <tr>
          <th>Votos Particulares</th>
          <td><span id="detalleVotosParticulares"></span></td>
        </tr>
        <tr>
          <th>Época</th>
          <td><span id="detalleEpoca"></span></td>
        </tr>
        <tr>
          <th>Materia</th>
          <td><span id="detalleMateria"></span></td>
        </tr>
        <tr>
          <th>Fecha de aprobación</th>
          <td><span id="detalleAprobacionFecha"></span></td>
        </tr>
        <tr>
          <th>Tiempo de Publicacion</th>
          <td><span id="detallePublicacionTiempo"></span></td>
        </tr>
        <tr>
          <th>Tiempo de Aplicacion</th>
          <td><span id="detalleAplicacionTiempo"></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
