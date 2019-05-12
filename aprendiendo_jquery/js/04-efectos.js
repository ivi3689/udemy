$(document).ready(function(){
    var caja = $("#caja");
    $("#mostrar").hide();
    
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
     // caja.show('fast');
      //caja.fadeIn('slow');
        //caja.fadeTo('slow', 0.8); //El numero es la opacidad
        caja.slideDown('slow');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
     // caja.hide('fast');
      //caja.fadeOut('slow');
       // caja.fadeTo('slow', 0.2);
        caja.slideUp('slow');
    });

    $("#todoenuno").click(function(){
        //caja.toggle('fast');
        //caja.fadeToggle('fast');
        caja.slideToggle('fast');
    });

    $("#animar").click(function(){
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '30px',
                        height: '110px'
                     }, 'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px'
                    },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
                    },'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '15px'
                    },'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '30px',
                height: '110px'
                     }, 'slow');
    });

});