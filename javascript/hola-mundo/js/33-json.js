'use strict'

//JSON - Javascript Object Notation

var pelicula = {
    titulo: 'Ironman',
    year: '2013',
    pais: 'Estados unidos'
};

var peliculas = [
    {titulo:  "Ironman 2", year: "2015", pais: "Estados unidos"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[index].titulo +" - "+ peliculas[index].year);
    caja_peliculas.append(parrafo)
}