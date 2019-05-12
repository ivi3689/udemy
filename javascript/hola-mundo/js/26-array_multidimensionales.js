'use strict'

//Array multidimensionales

var categorias = ['Accion','Terror', 'Aventura', 'Comedia'];
var peliculas = ['xxx','Ironman','Parker'];

peliculas.sort(); //sort o reverse  para ordenar la array

console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][1]);
/*
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();
*/
var indice = peliculas.indexOf('Parker');

if(indice > -1){
    peliculas.splice(indice, 1);
}
console.log(indice);

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array  = cadena.split(", ");

console.log(peliculas_string);
console.log(cadena_array)
