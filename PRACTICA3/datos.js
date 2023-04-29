const mongoose = require('mongoose');

const cadenaConexion = "mongodb+srv://PamelaVera:120919@atlascluster.ttq9s2u.mongodb.net/idiomas";

(async ()=>{
    try{    
        const conexion = await mongoose.connect(cadenaConexion); 
    }catch(error){
        console.log(error);
    }
})()

const Idioma = mongoose.model("Idioma",{
    Descripcion:String,
});
const Palabra = mongoose.model("Palabra",{palabra:String,Deletreo:String,});

const Registro = mongoose.model("Registro", 
         { 
                 idIdioma: {type: mongoose.Types.ObjectId , ref:"Idioma" } ,
                 idPalabra: {type: mongoose.Types.ObjectId , ref:"Palabra" } ,
                 Deletreo : String, 
                 Silaba : String,
                 Fonetica : String, 
             }  
             );
module.exports = {
    Idioma,
    Palabra,
    Registro,
};