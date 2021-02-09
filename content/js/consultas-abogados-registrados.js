// Consultas Abogados Registrados
$(document).ready(function () {

    $.ajax({
        'url': "http://127.0.0.1:8000/abogados?ano=2019",
        'type': "GET",
        'dataType': "json",
        'success': function (data) {
            var mapeado = data.map(el => Object.values(el));
            alCargarConExito(mapeado);
        }
    });

    function alCargarConExito(mapeado) {
        $('#abogadosRegistrados').DataTable({
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
            'pageLength': 50,
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
    };

});
