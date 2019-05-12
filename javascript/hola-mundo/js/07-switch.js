'use strict'

//switch

var edad = 28;
var imprime= "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Estas en plena crisis de edad";
    break;
    case 70:
        imprime = "Eres un jubilado";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}
    console.log(imprime)
