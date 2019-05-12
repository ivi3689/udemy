'use strict'

// eventos del raton

function cambiarColor(){

    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
        
    }else{
        boton.style.background = "green"
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}

var boton = document.querySelector("#boton");
//click
boton.addEventListener('click', function(){
    cambiarColor();
    console.log(this);
    this.style.border = "10px solid blue"
});

//Mouse over
boton.addEventListener('mouseover',function(){
boton.style.background ="blue";
});

//Mouse out
boton.addEventListener('mouseout',function(){
    boton.style.background ="#ccc";
    });