//variable para  llamar los datos de el archivo DAtos.js
var llamada = require('./datos');

function findIdiomaForId(id){
    return new Promise((resolve, reject)=>{
        // idioma es donde se  almacenara los del arreglo Idioma
        const idioma = llamada.Idioma.find((idioma)=> idioma.id===id ); // hacemos uso de llamda. para hacer usos de los datos vinculados 
        if (!idioma)
        {
            const error= new Error();
            error.message="Idioma no encontrado";
            reject(error);
        }
        resolve(idioma);

    })

}
function findRegistroForId(id){
    return new Promise((resolve, reject)=>{
        // registro es donde se  almacenara los del arreglo Registro

        const registro =  llamada.Registro.find((registro)=>{
            return registro.id===id;
        });
        if (!registro)
        {
            const error =  new Error();
            error.message="Registro no encontrado";
            reject(error);
        }
        
        resolve(registro);
    })
}
findIdiomaForId(2)
.then((idioma)=>{ 
    console.log(idioma);
    return findRegistroForId(idioma.idregistro);
})
.then((registro)=>{
    console.log(registro)
})
.catch((error)=>{
    console.log(error.message)
})