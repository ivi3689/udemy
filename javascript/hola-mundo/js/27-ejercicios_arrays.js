'use strict'

/*hacer un progrma que pida:
1- seis nmeros por pantalla y los meta en un array
2- tiene que mostrar todos sus elementos en el cuerpo de la pagina y en la consola
3- sacar el array ordenado
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- busqqeda de un valor introducido por el usuario, si esta en el array y su indice 
se valorara el uso de funcones */

function mostrarArray(elementos, textoCustom= ""){
// mostrar en el cuerpo de la pagina
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");

    document.write("<ul>");
    elementos.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>")
}

var numeros = [];

for(var i = 0; i <= 5; i++){
    //son dos maneras de hacer lo mismo Pedir seis numeros
    //numeros[i]= parseInt (prompt("Introduce un numero",0));
    numeros.push(parseInt (prompt("Introduce un numero",0)));
}

// mostrar en el cuerpo de la pagina
    mostrarArray(numeros);
//mostrar el array por la consola
console.log(numeros);

//ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'ordenado');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//contar elementos

document.write("<h1>El array tiene: "+numeros.length+" elementos");

//busqueda

var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda "+posicion+"</h1><hr/>");

}else{
    document.write("<h1>No encontrado</h1>");
}

