const { model, Schema } = require('mongoose');

const PalabraSchema = Schema(
    {
        palabra:{
            type: String,
            required:true,
            unique:true
        },

        deletreo:{
            type: String,
            required:true
        }

    }
);

PalabraSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Palabra', PalabraSchema );