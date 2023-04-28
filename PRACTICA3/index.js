const {
    GuardarIdioma,
   Guardarpalabra,
   GuardarRegistro,
   listarIdiomasForEach,
   listarPalabraWhile,
   listarRegistroForOf
} = require ('./funciones')

//funciones CRUD de las entidades
GuardarIdioma("Ingles");
Guardarpalabra("Good bye","7");
GuardarRegistro("644a0a9d36f865d797a6ca92","644a0ae9b9440b46a7d8de0e","7","2","god bai"); //los dos primeros campos deben ser datos existentes

//funciones para listar por consola los datos registrados en las 3 colecciones
listarIdiomasForEach();
listarPalabraWhile();
listarRegistroForOf();