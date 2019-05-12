$(document).ready(function(){
   // Mover  un elemento por la pagina
    $(".elemento").draggable();

    // Redimensionar

    $(".elemento").resizable();
        //El metodo selctable y sortable nu funcionan a la vez 
    // Seleccionar elementos
   // $(".lista-seleccionable").selectable();

    // Listar y organizar los elementos
    $(".lista-seleccionable").sortable({
        update: function(event, ui) {
           console.log("Ha cambiado la lista") 
        }
    });
    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    })

    // Efectos
        // Los efectos utilizados tienen tipo y velocidad:  fade explode blind slide drop fold puff scale shake
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake", "slow")
        //$(".caja-efectos").fadeToggle()
    });

    //tooltips

    $(document).tooltip();

    // Cuadros de dialogos
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //datepicker input con calendario al hacer click
    $("#calendario").datepicker();

    //Tabs Son pestañas
    $("#pestanas").tabs();
    
});