const {Idioma, Palabra, Registro} = require ('./datos')

async function GuardarIdioma(Descripcion) {
    try {
        const nuevoIdioma = new Idioma({
            Descripcion: Descripcion
        });
        const idiomaSave = await nuevoIdioma.save();
        console.log("Idioma guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar Idioma
async function editarIdioma(Descripcion) {
    try {
      await Idioma.findByIdAndUpdate( {
       Descripcion:Descripcion
      });
      console.log("Idioma editado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar Idioma
async function eliminarIdioma(id) {
    try {
      await Deportista.findByIdAndDelete(id);
      console.log("Idioma eliminado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function Guardarpalabra(palabra,Deletreo) {
    try {
        const nuevaPalabra = new Palabra({
            palabra:palabra,
            Deletreo:Deletreo
        });
        const PalabraSave = await nuevaPalabra.save();
        console.log("Palabra guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar una palabra 
async function editarPalabra(palabra, Deletreo) {
    try {
      await Palabra.findByIdAndUpdate( {
        palabra:palabra,
        Deletreo:Deletreo
      });
      console.log("Palabra editada con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar un Tipo de Ejercicio
async function eliminarpalabra(id) {
    try {
      await TipoEjercicio.findByIdAndDelete(id);
      console.log("palabra eliminada con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function GuardarRegistro(idIdioma, idPalabra, Deletreo, Silaba, Fonetica) {
    try {
        const nuevoRegistro = new Registro({
            idIdioma: idIdioma,
            idPalabra:idPalabra,
            Deletreo :Deletreo, 
            Silaba : Silaba,
            Fonetica : Fonetica
           
        });
        const registroSave = await nuevoRegistro.save();
        console.log( "Registro guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar un Registro
async function editarunregistro(idIdioma, idPalabra, Deletreo, Silaba, Fonetica) {
    try {
        const registro = await Registro.findByIdAndUpdate(idregistro,{
            idIdioma: idIdioma,
            idPalabra: idPalabra,
            Deletreo: Deletreo,
            Silaba: Silaba,
            Fonetica: Fonetica,
        });
        console.log("Registro editado con éxito.");
    } catch (error) {
        console.error(error);
    }
}
//funcion para eliminar un Registro
async function eliminarunRegistro(idregistro) {
    try {
        const registro = await Registro.findByIdAndDelete(idregistro);
        console.log("registro eliminado con éxito.");
    } catch (error) {
        console.error(error);
    }
}
async function listarRegistroForOf() {
    try {
        const registro = await Registro.find().populate('idIdioma idPalabra');
        console.log(`Registros`)
        console.log('************************');
        for (const registros of registro) {
            console.log(`ID: ${registros._id}`);
          console.log(`Idioma: ${registros.idIdioma.Descripcion}`);
          console.log(`Palabra: ${registros.idPalabra.palabra}`);
          console.log(`Deletreo: ${registros.Deletreo}`);
          console.log(`Silaba: ${registros.Silaba}`);
          console.log(`Fonetica: ${registros.Fonetica}`);
          console.log('*************************');
        }
      } catch (error) {
        console.log('Error al listar registros', error);
      }
}
async function listarIdiomasForEach() {
    try {
        const cursor = await Idioma.find();
        console.log(` Idioma`)
        console.log('**********************************');
        cursor.forEach((valor) => {
            console.log(`Descripcion : ${valor.Descripcion}`);
            console.log('********************************');
        });
    } catch (error) {
      console.log('Error al listar Idiomas', error);
    }
}
async function listarPalabraWhile() {
    try {
        const palabras = await Palabra.find();
        let i = 0;
        console.log(`Palabra`)
        console.log('*******************************');
        while (i < palabras.length) {
            console.log(`palabra: ${palabras[i].palabra}`);
            console.log(`Deletreo: ${palabras[i].Deletreo}`);
            console.log('---------------------------------');
            i++;
        }
    } catch (error) {
        console.log('Error al listar palabra ', error);
    }
}
module.exports = {
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
   listarRegistroForOf,

};