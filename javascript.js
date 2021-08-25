$(document).ready(function () {
    $("#Ajax").click(function (e) { 
        e.preventDefault();


        //USANDO FUNCION AJAX POR METODO GET
        $.ajax({
            url:'empleados.json',//Direccion del archivo json
            type:'get',//Metodo http utilizado
            dataType:'json',//tipo de Datos
            success:function(data){// si es success, almacenando en variable llamada data
                //console.log(data);
                $('#MostrarAjax').html('');
                $.each(data.empleados, function (i, valor) {                      
                    $('#MostrarAjax').html($('#MostrarAjax').html()+`
                        ${valor.Nombre}
                        ${valor.Apellido}
                        ${valor.Direccion}
                        ${valor.Correo}
                        ${valor.Usuario}</br>
                    `);
                });
            },
            error:function(xhr, status, error){// si hay un error, capturando y mostrando por consola
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
    });
});