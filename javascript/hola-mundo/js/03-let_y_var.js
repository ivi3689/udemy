'use strict'
//prueba de let y var

//prueba con var
var numero = 40;
console.log(numero)  //valor es 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con let 

var texto = "Estudiando la parte de js";
console.log(texto); //valor texto con js

if(true){
    let texto = "Acabado la parte de html";
    console.log(texto); //valor texto con  html
}
console.log(texto)  //valor texto con js