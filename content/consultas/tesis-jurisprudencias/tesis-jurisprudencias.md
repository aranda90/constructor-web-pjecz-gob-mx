Title: Tesis y Jurisprudencias
Summary:
Slug: tesis-jurisprudencias
URL: consultas/tesis-jurisprudencias/
Save_As: consultas/tesis-jurisprudencias/index.html
Date: 2021-12-13 10:08:00
Modified: 2021-12-13 10:08:00
JavaScripts: consultas-tesis-jurisprudencias.js
Stylesheets: consultas-tesis-jurisprudencias.css


<img class="img-fluid" src="cabecera.jpg">

De acuerdo al artículo 31 de los Lineamientos para la emisión, aprobación, sistematización, compilación y publicación de las Tesis y Jurisprudencias en el Poder Judicial del Estado de Coahuila de Zaragoza emitidos el 18 de noviembre de 2020, por el Magistrado Miguel Felipe Mery Ayup, Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Estado, ordenará a la Comisión de Sistematización de Tesis su publicación inmediatamente —una vez concluidos los proyectos por cada órgano jurisdiccional— entre otros medios, en la página de internet del Poder Judicial de Coahuila.

Por lo anterior, la aplicación de la innovación representa un gran beneficio para la labor de los órganos jurisdiccionales, especialmente en la difusión de sus determinaciones y criterios, los cuales ponemos en este espacio al alcance no sólo de los funcionarios judiciales, sino también de los abogados postulantes, estudiosos del derecho y público en general. Esta plataforma constituye un importante instrumento para su consulta de manera ordenada y sistematizada.

<div id='consultas'>
  <div class="container d-flex justify-content-center" style="overflow:auto;" >
    <button id="divcargando" class="btn btn-lg btn-light"  type="button" disabled>
      <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
      Cargando...
    </button>
 </div>
<div class="container" id="tablaResultado" style="overflow:auto; width:auto" >
    <table id="ListasTable" class="table table-striped table-bordered" style="width:auto  ">
      <thead>
        <tr>
          <th>No. de registro digital</th>
          <th>Fecha de aprobación</th>
          <th>Título</th>
          <th>Subtítulo</th>
          <th>Órgano emisor</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="container" id="tablaDetalle" style="overflow:auto; width:auto" >
  <button id="btnbackTesisJusrisprudencias" type="button" class="btn btn-secondary">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      Tesis y jurisprudencias
    </button>
    <h2 id="detalleTitulo"></h2>
    <br>
    <div class="row" style="border: 1px solid #dee2e6;">
      <div class="col-12">
        <p style="font-size: 15px; font-weight: bold; padding: 0 0;">SUBTÍTULO</p>
      </div>
      <div class="col-12">
         <p id="detalleSubtitulo" style="font-size: 17px; padding: 0 0;"> </p>
      </div>
    </div>
    <div class="row" style="margin-top: 2em; ">
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">CLAVE DE CONTROL:</p>
          </div>
          <div class="col-12">
            <p id="detalleClaveControl" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">NÚMERO DE REGISTRO DIGITAL:</p>
          </div>
          <div class="col-12">
            <p id="detalleRegistro" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
         <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;"">ÓRGANO EMISOR:</p>
          </div>
          <div class="col-12">
            <p id="detalleAutoridad" style="font-size: 17px; padding: 0 0;""> </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 2em; ">
      <div class="col-6">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">ÉPOCA:</p>
          </div>
          <div class="col-12">
            <p id="detalleEpoca" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">MATERIA:</p>
          </div>
          <div class="col-12">
            <p id="detalleMateria" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 2em; ">
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">TIPO:</p>
          </div>
          <div class="col-12">
            <p id="detalleTipo" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">CLASE:</p>
          </div>
          <div class="col-12">
            <p id="detalleClase" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">RUBRO:</p>
          </div>
          <div class="col-12">
            <p id="detalleRubro" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 2em; ">
      <div class="col-12">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">TEXTO:</p>
          </div>
          <div class="col-12">
            <p id="detalleTexto" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 2em; ">
      <div class="col-12">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">PRECEDENTES:</p>
          </div>
          <div class="col-12">
            <p id="detallePrecedentes" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
    </div>
     <div class="row" style="margin-top: 2em; ">
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold;  padding: 0 0;">FECHA DE APROBACIÓN:</p>
          </div>
          <div class="col-12">
            <p id="detalleAprobacionFecha" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">FECHA DE PUBLICACIÓN:</p>
          </div>
          <div class="col-12">
            <p id="detallePublicacionTiempo" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="border: 1px solid #dee2e6;">
          <div class="col-12">
            <p style="font-size: 15px; font-weight: bold; padding: 0 0;">FECHA DE APLICACIÓN:</p>
          </div>
          <div class="col-12">
            <p id="detalleAplicacionTiempo" style="font-size: 17px; padding: 0 0;"> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
