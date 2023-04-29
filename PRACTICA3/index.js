const {
    GuardarIdioma,
    editarIdioma,
    eliminarIdioma,
   Guardarpalabra,
   editarPalabra,
   eliminarpalabra,
   GuardarRegistro,
   editarunregistro,
   eliminarunRegistro,
   listarIdiomasForEach,
   listarPalabraWhile,
   listarRegistroForOf
} = require ('./funciones')

//funciones CRUD de las entidades
GuardarIdioma("Ingles");
Guardarpalabra("Good bye","7");
GuardarRegistro("644c41c2095a3e241daaf148","644c46444380c94a4a727e53","7","2","god bai"); //los dos primeros campos deben ser datos existentes
//funciones para editar las entidades. El primer campo debe ser existente en la BD.
editarIdioma("id del idioma a editar","Español");
editarPalabra("id de la palabra  a editar","Procesador" ,"10");
editarunregistro("id del registro a editar","id del idioma","id de la palabra","","10","4","procesador");
//funciones para eliminar las entidades. Se tiene que pasar el id del registro, debe ser existente.
eliminarIdioma("id del Idioma");
eliminarpalabra("id de la palabra");
eliminarunRegistro("id del registro");
//funciones para listar por consola los datos registrados en las 3 colecciones
listarIdiomasForEach();
listarPalabraWhile();
listarRegistroForOf();