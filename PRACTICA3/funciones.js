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
async function listarRegistroForOf() {
    try {
        const registro = await Registro.find().populate('idIdioma idPalabra');
        console.log(`Registros`)
        console.log('************************');
        for (const registros of registro) {
            console.log(`ID: ${registros._id}`);
          console.log(`Idioma: ${registros.idIdioma}`);
          console.log(`Palabra: ${registros.idPalabra}`);
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
   Guardarpalabra,
   GuardarRegistro,
   listarIdiomasForEach,
   listarPalabraWhile,
   listarRegistroForOf,

};