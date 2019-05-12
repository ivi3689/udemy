'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Ivan";

var nombres = ["juan","Pedro","Jaime","Javi",52,true];

var lenguajes = new Array("PHP","JS","JAVA","GO");
//console.log(nombres[2]);
//console.log(lenguajes.length);
/*
var elemento = parseInt(prompt("Que elemento del array quieres??", 0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que"+nombres.length)
}else{
    alert("El usuario es: "+nombres[elemento]);
}
*/
document.write("<h1>Lenguajes de programacion del 2019</h1>");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"<li>");
}*/
/*
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr)
    document.write("<li>"+indice+" - "+elemento+"<li>");
});*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"<li>");
}

document.write("</ul>");
