//variable para  llamar los datos de el archivo Datos.js
var llamada = require('./datos');

function busquedaIdiomaporID(id,callback)
{
    // idioma es donde se  almacenara los del arreglo Idioma
    const idiomas =  llamada.Idioma.find((idiomas)=> idiomas.id===id);// hacemos uso de llamda. para hacer usos de los datos vinculados 
    if(!idiomas)
    {
    const error =new Error();
    error.message=` El idioma con id ${id} no pudo ser encontrado`;
      return callback(error);
    }
    return callback(null, idiomas);
}

function busquedaRegistroporID(id,callback)
{        // registro es donde se  almacenara los del arreglo Registro
    const registro = llamada.Registro.find((registro)=>registro.id===id);
    if (!registro)
    {
        const error= new Error();
        error.message=`El registro con id ${id} no existe`;
        return callback(error);
    }
    return callback(null, registro);
}

busquedaIdiomaporID(2,  (err, idioma)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    
    busquedaRegistroporID(idioma.idregistro, (err, registro)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        idioma.registro = registro;
        delete idioma.idregistro;
        console.log(idioma)


    })
}
)