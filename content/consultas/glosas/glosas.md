Title: Glosas
Slug: glosas
URL: consultas/glosas/
Save_As: consultas/glosas/index.html
Date: 2021-06-22 15:00
Modified: 2021-06-22 15:00
JavaScripts: consultas-glosas.js
Stylesheets: consultas-glosas.css


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
  <div class="container" id="autoridades"  style="overflow:auto;" >
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
              <th>Fecha</th>
              <th>Expediente</th>
              <th>Tipo de Juicio</th>
              <th>Archivo</th>
            </tr>
          </thead>
      </table>
  </div>
</div>
