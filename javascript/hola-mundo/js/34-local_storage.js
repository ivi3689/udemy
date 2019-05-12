'use strict'

//Local Storage

//Comprobar la disponibilidad  del localstorage

if(typeof(Storage) !=='undefined'){
    console.log("Localstorage disponible")
}else{
    console.log("Localstorage  no disponible") 
}

//Guardar datos

localStorage.setItem("titulo","curso de ivan");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar objetos

var usuario = {
    nombre: "Ivan del campo",
    email: "ividcr@gmail.com",
    genero: "varon"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" "+userjs.email+" - "+userjs.nombre);

//Borrar datos del local storage
localStorage.removeItem("usuario");
localStorage.clear();


