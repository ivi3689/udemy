'use scrict'

//Condicionales IF
//Si A (es igual, es menor, es mayor, menor, igual que) a B entonces haz algo


var edad1 = 10;
var edad2 = 12;

//Si pasa esto
if(edad1 > edad2){
    //Ejecuta esto
    console.log("Edad uno es mayor que edad2")
}else{
    console.log("La edad uno es inferior a la edad2")
}
/*
//Operaciones relacionales                 //Operaciones logicas
    Mayor: >                                AND(Y): &&
    Menor: <                                OR(O): ||
    Mayor o igual: >=                       NEGACION: !
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/
var edad = 18;
var nombre = 'Iván del Campo';

if(edad >= 18){
    // es mayor de edad
    console.log(nombre+" tiene "+edad+" años");
    if(edad <= 25){
        console.log("Es un jovencito");
    }else if (edad >= 70) {
        console.log("eres un anciano")
    }else{
        console.log('Ya no eres jovencito')
    }
}else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

var year = 2028;

//Negacion

if(year !=2016){
    console.log('El año no es 2016');
}
//And
if (year >= 2000 && year <=2020){
    console.log('Estamos en la actual');
}else{
    console.log('Estamos en la era post-moderna');
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log('El año acaba en 8');
}else{
    console.log('El año no esta registrado');
}