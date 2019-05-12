'use strict'


function holaMundo(texto){
    var hola_mundo = "Texto dentro de función"//es una variable local que solo funciona dentro de la función
    console.log(texto);
    console.log(number); // para convertir un dato a un string usamos toString()
    console.log(hola_mundo)
}

var number = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
