'use strict'

//Funciones
//Una fucion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion

function porConsola(numero1, numero2) {
    console.log("La resta es "+(numero1-numero2))
    console.log("La multiplicacion es "+(numero1*numero2));
    console.log("La division es "+(numero1/numero2));
    console.log("La suma es "+(numero1+numero2));
    console.log("******************************");
}
function porPantalla(numero1, numero2){
    document.write("La resta es "+(numero1-numero2)+"</br>")
    document.write("La multiplicacion es "+(numero1*numero2)+"</br>");
    document.write("La division es "+(numero1/numero2)+"</br>");
    document.write("La suma es "+(numero1+numero2)+"</br>");
    document.write("******************************"+"</br>");
}

function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instrucciones a ejecutar
    //tanto el console como el return lo podemos ver al llamar a la funcion en la consola del navegador
  if(mostrar == false){
        porConsola(numero1, numero2);       
  }else{
        porPantalla(numero1, numero2); 
  }    
    return true;
    //return"Hola soy la calculadora!!";
}
//Invocar o llamr a la funcion y sus diferentes opciones
calculadora(12, 8, true);
calculadora(30, 15)
//var resultado = calculadora();
//console.log(resultado);

//para invocar varias veces a una funcion podemos llamarla varias veces o hacer un bucle
/*
for(var i = 1; i <= 10; i++){
    console.log(i)
    calculadora(i, 5)
}*/