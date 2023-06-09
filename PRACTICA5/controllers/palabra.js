const { response } = require('express')
const {  Palabra } = require('../models');


const getPalabras= async (req, res = response )=>{

    //GET http://localhost:3000/products   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, palabra ] = await Promise.all([
        Palabra.countDocuments(query),
        Palabra.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
    res.json({
      sum, 
      palabra
    })
    
}
const getPalabra= async (req, res =  response)=>{
    const {id} = req.params
    const palabra=  await Palabra.findById(id);
    res.json(palabra);
}
const CreatePalabra= async (req, res = response)=>{
    const { status,  ...body } =  req.body;
    
    const existPalabra=  await Palabra.findOne({palabra: body.palabra})

    if (existPalabra)
    {
        return res.status(400).json({
            msg:`la palabra ${ existPalabra.palabra } ya existe`
        })
    }

    const data = {
        ...body,
        palabra: body.palabra
    }

    const palabra = new Palabra(data);

    const newPalabra =  await palabra.save();
    res.status(201).json(newPalabra);
}
const updatePalabra= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedPalabra =  await Palabra.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPalabra);
}
const deletedPalabra= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPalabra =  await Palabra.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedIdioma);
}

module.exports = {
    getPalabra,
    getPalabras,
    CreatePalabra,
    updatePalabra,
    deletedPalabra
}