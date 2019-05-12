//tipo de datos personalizado
type alfanumerico = string |number;

//string

let cadena: string = "ivan_del_campo";//puede ser uno de los dos datos 

//number 
let numero: number = 12;

//boleano

let verdadero_falso: boolean = true;

//any 
let  cualquiera: any = "hola";
cualquiera = 17;

//arrays

var lenguajes: Array<string> = ["php", "js", "ts"]
let years: number[] = [12, 13, 14]

//let vs var  //el let actua solo cuando ocurre el if solo a nivel de bloque y el var actua a nivel global
var numero1 = 15;
var numero2 = 25;

if(numero1 == 15){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log("cadena, numero, verdadero_falso, cualquiera, lenguajes")