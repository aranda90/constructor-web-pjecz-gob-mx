'use strict';

let distritos_api_url;
let redams_api_url;

$(document).ready(function() {

    // Que no se refresque la página al presionar Enter
    $('#buscarForm').on('submit', function(event){
        event.preventDefault();
    });

    // URL de la API
    switch (location.hostname) {
        case "localhost":
            // Para desarrollo
            distritos_api_url = "http://localhost:8001/distritos";
            redams_api_url = "http://localhost:8001/v2/redams";
            break;
        case "127.0.0.1":
            // Para desarrollo
            distritos_api_url = "http://127.0.0.1:8001/distritos";
            redams_api_url = "http://127.0.0.1:8001/v2/redams";
            break;
        case "172.30.37.233":
            // Para desarrollo
            distritos_api_url = "http://172.30.37.233:8001/distritos";
            redams_api_url = "http://172.30.37.233:8001/v2/redams";
            break;
        default:
            // Para producción
            distritos_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/distritos";
            redams_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/v2/redams";
    }

    // Alimentar distritoSelect
    $.ajax({
        'url': distritos_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function (dataDistritos) {
            alRecibirDistritos(dataDistritos);
        }
    });
    function alRecibirDistritos(data) {
        $.each(data, function (i, distrito) {
            $('#distritoSelect').append($('<option>', {
                value: distrito.id,
                text: distrito.distrito
            }));
        });
    };

    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function () {
        alRecibirRedam();
    });

    // Mostrar DataTable
    function alRecibirRedam() {
        // Mostrar tabla
        $('#resultadosDiv').show();
        // DataTable
        $('#resultadosDataTable').DataTable({
            'processing': true,
            'serverSide': true,
            'ajax': {
                'url': redams_api_url,
                'type': "GET",
                'dataSrc': "items"
            },
            'columns': [
                { "data": "id" },
                { "data": "distrito_nombre_corto" },
                { "data": "autoridad_descripcion_corta" },
                { "data": "nombre" },
                { "data": "expediente" },
                { "data": "fecha" }
            ],
            'pageLength': 10,
            'order': [[0, "desc"]],
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
