// Consultas Abogados Registrados
$(document).ready(function () {

    const ABOGADOS_PLATAFORMA_WEB_API_URL = "http://127.0.0.1:8000/abogados"

    // Al dar clic en el botón mostrar
    $('#consultarButton').click(function () {

        // Ocultar botón Consultar, mostrar botón Cargando... y ocultar mensaje Sin resultados
        $('#consultarButton').hide();
        $('#cargandoButton').show();
        $('#sinResultados').hide();

        // Llamar a la API y ejecutar acciones al recibir resultados
        $.ajax({
            'url': ABOGADOS_PLATAFORMA_WEB_API_URL,
            'type': "GET",
            'data': {
                'ano': $('#anoSelect').val(),
                'nombre': $('#nombreInput').val(),
            },
            'dataType': "json",
            'success': function (data) {
                var mapeado = data.map(el => Object.values(el));
                alRecibirResultados(mapeado);
            }
        });

    }); // Al dar clic en el botón mostrar

    // Al recibir los datos de la API
    function alRecibirResultados(mapeado) {

        // Si no hay resultados, muestra mensaje y termina
        if (mapeado.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#abogadosRegistrados').hide();
            return;
        };

        // Si tiene datos, limpiar la tabla
        if ($('#abogadosRegistradosTable').DataTable().data().length > 0) {
            $('#abogadosRegistradosTable').DataTable().clear();
            $('#abogadosRegistradosTable').DataTable().destroy();
        };

        // Mostrar tabla
        $('#abogadosRegistrados').show();

        // DataTable
        $('#abogadosRegistradosTable').DataTable({
            'data': mapeado,
            'columns': [
                { 'title': "Libro" },
                { 'title': "Nombre" },
                { 'title': "Fecha" },
                { 'title': "Estatus" },
                { 'title': "Número" },
                { 'title': "ID" }
            ],
            'columnDefs': [
                {
                    'targets': [3, 5],
                    'visible': false
                }
            ],
            'pageLength': 10,
            'language': {
                'lengthMenu': "Mostrar _MENU_",
                'search': "Filtrar:",
                'zeroRecords': "Cargando información...",
                'info': "Página _PAGE_ de _PAGES_",
                'infoEmpty': "No hay registros",
                'infoFiltered': "(filtrados desde _MAX_ registros totales)",
                'oPaginate': {
                    'sFirst': "Primero",
                    'sLast': "Último",
                    'sNext': "Siguiente",
                    'sPrevious': "Anterior"
                }
            }
        });

        // Mostrar botón Consultar y ocultar botón Cargando...
        $('#consultarButton').show();
        $('#cargandoButton').hide();

    }; // Al recibir los datos de la API

});
