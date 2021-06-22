Title: Edictos en Línea
Summary: Comunicaciones oficiales públicas que tienen como fin promulgar una disposición, hacer pública una resolución, dar noticia de la celebración de un acto o citar a alguien.
Slug: consultas-edictos
URL: consultas/edictos/
Save_As: consultas/edictos/index.html
Date: 2020-05-19 22:22
Modified: 2020-05-20 12:32
JavaScripts: consultas-edictos.js
Stylesheets: consultas-edictos.css


<div id='consultas'>
  <div class="container" style="overflow:auto;">
        <h1 id="consultaDistrito"></h1>
        <h2 id="consultaJuzgado"></h2>
  </div>
  <div class="d-flex justify-content-center" style="overflow:auto;">
    <button id="divcargando" class="btn btn-lg btn-light"  type="button" disabled>
      <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
      Cargando...
    </button>
  </div>
  <div class="container" id="distritos" style="overflow:auto;">
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
  <div class="container" id="autoridades" style="overflow:auto;">
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
  <div class="container" id="tablaResultado" style="overflow:auto;">
        <button id="btnbackAutoridades" type="button" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i>  Autoridades</button>
        <br><br>
        <table id="ListasTable" class="table table-striped table-bordered" style="width:100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Expediente</th>
              <th>Descripción</th>
              <th>Archivo</th>
            </tr>
          </thead>
      </table>
  </div>

</div>
