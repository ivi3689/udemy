$(document).ready(function(){
    console.log("Estamos listos");
    // selector de ID
    var rojo = $('#rojo').css("background", "red")
                         .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
                                 .css("color", "purple");

    var rojo = $('#verde').css("background", "green")
                         .css("color", "blue");

    // selector de clase 
    var mi_clase = $(".zebra").css("padding", "5px");

    mi_clase.css("border", "5px dashed aquamarine");
    $(".sin_borde").click(function(){
        console.log("click dado")
        $(this).addClass('zebra')
    });

    //selectores de etiqueta

    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande')
        }else{
            that.removeClass('grande');
        }
        
    });

    //selector de atributo

    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');
    
    //otros

    //$('p, a').addClass('margen-superior');

    var busqueda = $('#caja .resaltado').eq(0).parent().find('[title="Google"]');

    console.log(busqueda);
});