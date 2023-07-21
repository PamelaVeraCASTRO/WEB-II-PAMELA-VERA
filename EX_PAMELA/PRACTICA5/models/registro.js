const { model, Schema } = require('mongoose');

const RegistroSchema = Schema(
    {
        idIdioma:{
            type: Schema.Types.ObjectId,
            ref:'Idioma',
            required: false,
        },
        idPalabra:{
            type: Schema.Types.ObjectId,
            ref:'Palabra',
            required: false,
        },
        deletreo:{
            type: Number,
            default:0
        },
        silaba:{
            type: Number,
            default:0
        },
        fonetica:{
            type: String
        },
        status:{
            type: Boolean,
            default:false
        }

    }
);
RegistroSchema.methods.toJSON = function(){
    const { __v,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Registro', RegistroSchema );