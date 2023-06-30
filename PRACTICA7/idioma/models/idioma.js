const { model, Schema } = require('mongoose');

const IdiomaSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'El nombre del Idioma es necesario'],
            unique:true
        }
    }
);

IdiomaSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Idioma', IdiomaSchema );