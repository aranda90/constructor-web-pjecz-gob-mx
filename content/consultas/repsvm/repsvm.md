Title: Registro Estatal de Personas Sancionadas por Violencia contra las Mujeres
Slug: consultas-repsvm
URL: consultas/repsvm/
Save_As: consultas/repsvm/index.html
Date: 2022-03-07 16:20
Modified: 2022-03-07 16:20
JavaScripts: consultas-repsvm.js


### ¿Qué es el Registro Estatal de Personas Sancionadas por Violencia contra las Mujeres?

Es un sistema de información de carácter administrativo y público, que contiene la inscripción de personas condenadas y sancionadas en un procedimiento penal por una sentencia ejecutoriada por delitos que implican violencia contra la mujer como son aquellos que vulneren el desarrollo de la personalidad; la integridad corporal; las libertades y seguridades reproductivas; la libertad y seguridades sexuales y el desarrollo de la personalidad; la vida; y la familia libre de violencia y la subsistencia familiar.

### Antecedentes

El artículo 3 de la Convención contra la Eliminación de todas las formas de discriminación contra la Mujer (CEDAW) establece que los Estados parte deben, en todas las esferas, adoptar las medidas apropiadas para garantizar a las mujeres el ejercicio y el goce de sus derechos humanos y las libertades fundamentales en igualdad de condiciones con el hombre.

En materia de violencia contra las mujeres, el Comité CEDAW ha recomendado a los Estados partes establecer un sistema para recabar, analizar y publicar periódicamente datos estadísticos sobre el número de denuncias de todas las formas de violencia por razón de género contra la mujer. El sistema debe incluir información sobre las condenas impuestas a los autores y las reparaciones.

### Objetivo

Tiene como objetivo ser un mecanismo efectivo de prevención y protección para atender el factor de riesgo de reincidencia y repetición de conductas de violencia contra las mujeres, a favor de las víctimas o potenciales víctimas. Este registro busca contribuir a garantizar el derecho de acceso de las mujeres a una vida libre de violencia y el derecho de acceso a la información.

### [Acuerdo C-009/2022 emitido por el Pleno del Consejo de la Judicatura del Estado de Coahuila de Zaragoza](/acuerdos-del-consejo/2022/2022-01-24-acuerdo-registro-repvm/)

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
                    <th>Tipo de Juzgado</th>
                    <th>Delito Genérico</th>
                    <th>Delito Específico</th>
                    <th>Tipo de Sentencia</th>
                    <th>Nombre</th>
                    <th>No. Causa</th>
                    <th>Pena Impuesta</th>
                    <th>Observaciones</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
