'use strict'

//Transformacion de textos

var number = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "Vamos a comenzar";

var dato = number.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

//Calcular longitud 

var nombre = "ivan";
    nombre = ["hola", "hola"];

console.log(nombre.length);

//Concatenar = Unir textos

//var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal)