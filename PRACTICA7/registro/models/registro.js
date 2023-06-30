const { model, Schema } = require('mongoose');

const RegistroSchema = Schema(
    {
        id:{
            type: String,
            required:true,
            unique:true
        },

        idIdioma:{
            type: String,
            require:false
        },
        idPalabra:{
            type: String,
            required:false
        },
        Deletro:{
            type: String,
            required:false
        },
        Silabas:{
            type: String,
            required:false
        },
        Fonetica:{
            type: String,
            required:false
        }

    }
);

RegistroSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('registro', RegistroSchema );