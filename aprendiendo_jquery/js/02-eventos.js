$(document).ready(function(){
    
    //Mouseover y Mouseout

    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background", "red");
    });
    caja.mouseout(function(){
        $(this).css("background","lightgreen")
    })*/
    function cambiaRojo(){
        $(this).css("background", "red");
    }
    function cambiaVerde(){
        $(this).css("background","lightgreen")
    }
    //Hover **simula lo mismo que el mouseover y el mouseout

    caja.hover(cambiaRojo, cambiaVerde);

    // click y doble-click

    caja.click(function(){
        $(this).css("background", "aquamarine")
               .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow");
    });

    // Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "2px solid green")
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
    });

    //Mousedown y Mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "red")
    });
    datos.mouseup(function(){
        $(this).css("border-color", "blue")
    });

    //Mousemove

    $(document).mousemove(function(){
        var sigueme = $("#sigueme");
        $('body').css("cursor", "none")
        sigueme.css("left", event.clientX )
                .css("top",event.clientY )

        
    })

});