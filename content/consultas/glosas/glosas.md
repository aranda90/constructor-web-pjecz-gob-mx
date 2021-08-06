Title: Glosas
Summary: Publicación del resumen de la glosa de debate que se lleve a cabo en los órganos jurisdiccionales colegiados para la resolución de los asuntos que se substancian ante ellos. Esto se hará treinta días naturales después a aquél en que causa ejecutoria la resolución respectiva.
Slug: glosas
URL: consultas/glosas/
Save_As: consultas/glosas/index.html
Date: 2021-06-22 15:00
Modified: 2021-06-22 15:00
JavaScripts: consultas-glosas.js
Stylesheets: consultas-glosas.css


### [Protocolo para la elaboración de la Glosa de Debate en los Órganos Jurisdiccionales del Poder Judicial del Estado de Coahuila.](https://storage.googleapis.com/pjecz-gob-mx/Acuerdos%20del%20Consejo/2015/2015-08-10%201200%20Acuerdo%20C-191%20Protocolo%20para%20la%20elaboraci%C3%B3n%20de%20la%20Glosa%20de%20Debate%20en%20los%20%C3%93rganos%20Jurisdiccionales/2015-08-10-acuerdoC-191.pdf)

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
