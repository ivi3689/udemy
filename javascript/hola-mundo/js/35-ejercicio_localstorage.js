'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    console.log("entra")
    var titulo = document.querySelector('#addpeliculas').value;
    if(titulo.length <= 0){

    }

    localStorage.setItem(titulo, titulo);
});