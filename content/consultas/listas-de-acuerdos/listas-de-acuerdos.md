Title: Listas de Acuerdos
Summary: Actuaciones que realiza diariamente el Poder Judicial del Estado de Coahuila de Zaragoza y que por ley de acuerdo al Código Procesal Civil deben de ser publicadas; en donde se incluyen autos, acuerdos, sentencias, exhortos y audiencias.
Slug: consultas-listas-de-acuerdos
URL: consultas/listas-de-acuerdos/
Save_As: consultas/listas-de-acuerdos/index.html
Date: 2020-05-11 16:00
Modified: 2020-05-20 12:32
JavaScripts: consultas-listas-de-acuerdos.js

<style>
/* this declares a better box model */
* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

.list-countAutoridades {
  float:left;
  text-align:center;
  width:30%;
  padding:0.5em;
  color:#ddd;
}

.list-countDistritos {
  float:left;
  text-align:center;
  width:30%;
  padding:0.5em;
  color:#ddd;
}

.li {
  transition-property: margin, background-color, border-color;
  transition-duration: .4s, .2s, .2s;
  transition-timing-function: ease-in-out, ease, ease;
}

.empty-item {
  transition-property: opacity;
  transition-duration: 0s;
  transition-delay: 0s;
  transition-timing-function: ease;
}

.empty .empty-item {
  transition-property: opacity;
  transition-duration: .2s;
  transition-delay: .3s;
  transition-timing-function: ease;
}

.hiding {
  margin-left:-100%;
  opacity:0.5;
}

.hidden {
  display:none;
}

.ul {
  float:left;
  width:100%;
  margin:2em 0;
  padding:0;
  position:relative;
}

.titleDistritos-ul:before {
  content:'';
  position:absolute;
  left:-2.8em;
  font-size:3em;
  text-align:right;
  top:1.3em;
  color:#ededed;
  font-weight:bold;
  font-family: 'Maven Pro', sans-serif;
  transform:rotate(-90deg);
}

.titleAutoridades-ul:before {
  content:'';
  position:absolute;
  left:-3.4em;
  font-size:3em;
  text-align:right;
  top:2.2em;
  color:#ededed;
  font-weight:bold;
  font-family: 'Maven Pro', sans-serif;
  transform:rotate(-90deg);
}

.li {
  float:left;
  clear:left;
  width:100%;
  margin:0.2em 0;
  padding:0.5em 0.8em;
  list-style:none;
  background-color:#f2f2f2;
  border-left:5px solid #004360;
  cursor:pointer;
  color:#333;
  position:relative;
  z-index:2;
}

.li:hover {
  background-color:#f9f9f9;
  border-color:#dbb993;
}

.empty-item {
  background:#fff;
  color:#ddd;
  margin:0.2em 0;
  padding:0.5em 0.8em;
  font-style:italic;
  border:none;
  text-align:center;
  visibility:hidden;
  opacity:0;
  float:left;
  clear:left;
  width:100%;
}

.empty .empty-item {
  opacity:1;
  visibility:visible;
}

.info {
  float:left;
  width:60%;
  margin:2em 20%;
  padding:2em 0;
  background:#f9f9f9;
  border-left:5px solid #004360;
  padding:10px 20px;
}

/* Large desktop */
@media (min-width: 1200px) {
  #consultas>div{
        width: 60%;
    }
}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {
   #consultas>div{
        width: 60%;
    }
}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
   #consultas>div{
        width: 100%;
    }
}

/* Landscape phones and down */
@media (max-width: 480px) {
   #consultas>div{
        width: 100%;
    }
}
</style>
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
  <div class="container" id="tablaResultado" style="overflow:auto;" >
        <button id="btnbackAutoridades" type="button" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i>  Autoridades</button>
        <br><br>
        <table id="ListasTable" class="table table-striped table-bordered" style="width:100%">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Archivo</th>
            </tr>
          </thead>
      </table>
  </div>
</div>
