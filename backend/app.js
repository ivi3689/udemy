'use strict'
 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de Rutas
var project_routes = require('/routes/project')

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.use('/api', project_routes);

// exportar
module.exports = app;