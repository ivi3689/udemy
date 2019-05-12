'use strict'

//Bucle while

var year = 2018;

while(year != 1991){
    //ejecuta esto
    console.log("Estamos en el año: "+year);
    if(year == 2000){
        break;
    }
    year--;
}



//do while

var years =29;

do{
    alert('Solo cuando sea diferente a 29');
    years--;
}while(years > 25)