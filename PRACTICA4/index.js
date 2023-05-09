const {idiomas} = require ('./datos')

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  5000;

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//GET - Obtener todos los deportistas
app.get('/idiomas', (req,res)=>{
    res.status(200).send(
        idiomas
    );
})

//GET - Obtener un deportista por su ID
app.get('/idiomas/:id', (req, res) => {
    const idioma = idiomas.find(d => d.id === parseInt(req.params.id));
    if (!idioma) {
      res.status(404).send('El idioma con el ID especificado no existe.');
      return;
    }
    res.send(idioma);
});

//POST - Crear/Insertar un nuevo deportista
app.post('/idiomas/insertar', (req,res)=>{
    const {body} = req;
    idiomas.push(body);
    res.status(200).send({
        message:"Idioma insertado correctamente",
        response: body
    });
});

//PUT - Modificar un deportista por su ID
app.put('/idiomas/modificar/:id', (req,res)=>{
    const {id, descripcion} = req.body;
    
    let idioma =  idiomas.filter(p=> p.id === id)[0] || {}

    idioma.descripcion=descripcion;

    res.status(200).send(
        {
            message:'Idioma modificado correctamente',
            response: idioma
        }
    );
});

//DELETE - Eliminar un deportista por su ID
app.delete('/idiomas/eliminar/:id', (req, res) => {
    const index = idiomas.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send(
            {
                message:'El Idioma con el ID especificado no existe.'
            }
        );
      return;
    }
    idiomas.splice(index, 1);
    res.status(200).send(
        {
            message:'Idioma eliminado correctamente',
        }
    );
});

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
});