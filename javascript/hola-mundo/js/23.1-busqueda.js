'use strict'

//Transformacion de textos

var number = 444;
var texto1 = " Bienvenido al curso de javascript";
var texto2 = "Vamos a comenzar el curso";

var busqueda = texto1.indexOf("curso");
   // busqueda = texto1.lastIndexOf("curso");
   // busqueda = texto2.search("a");
   // busqueda = texto1.charAt(44);
   // busqueda = texto2.match(/a/g);
  //  busqueda = texto1.substr(14,5)
   // busqueda = texto1.startsWith("Bi");
   // busqueda = texto1.endsWith("pt");
   // busqueda = texto1.includes("javascript");
   //busqueda = texto2.replace("curso", "temario");
   //busqueda = texto2.slice(14);
   //busqueda = texto2.split(" ");
   busqueda = texto1.trim();
console.log(busqueda);