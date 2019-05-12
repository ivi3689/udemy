'use strict'

//Ejercicio 1
/*
Progrma que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los  numeros no son un numero o son menoreso igales a cero, nos los vuelva a pedir 
*/

var numero1 = parseInt (prompt('Introduce el primer numero', 0));
var numero2 = parseInt (prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt (prompt('Introduce el primer numero', 0));
    numero2 = parseInt (prompt('Introduce el segundo numero', 0));
}//con este WHILE nos permite corregir el campo cuando introducimos algo q no se a un numero o menor a 0

if(numero1 == numero2){
    alert('Los numeros son iguales');
}else if(numero1 > numero2){
    alert('Los numeros mayor es: ' +numero1);
    alert('Los numeros menor es: ' +numero2);
}else if(numero2 > numero1){
    alert('Los numeros mayor es: ' +numero2);
    alert('Los numeros menor es: ' +numero1);
}else{
    alert('Introduce numeros correctos')
}