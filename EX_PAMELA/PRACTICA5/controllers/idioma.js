const { response } = require('express')
const { Idioma } = require('../models');


const getIdiomas= async (req, res = response )=>{

    //GET http://localhost:3000/products   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, idioma ] = await Promise.all([
        Idioma.countDocuments(query),
        Idioma.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ])
    res.json({
      sum, 
      idioma
    })
    
}
const getIdioma= async (req, res =  response)=>{
    const {id} = req.params
    const idioma=  await Idioma.findById(id);
    res.json(idioma);
}
const createIdioma= async (req, res = response)=>{
    const { status,  ...body } =  req.body;
    
    const existIdioma =  await Idioma.findOne({descripcion: body.descripcion})

    if (existIdioma)
    {
        return res.status(400).json({
            msg:`El Idioma ${ existIdioma.descripcion } ya existe`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion
    }

    const idioma = new Idioma(data);

    const newIdioma =  await idioma.save();
    res.status(201).json(newIdioma);
}
const updateIdioma= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedIdioma =  await Idioma.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedIdioma);
}
const deleteIdioma= async (req, res = response)=>{
    const {id} = req.params;
    const deletedIdioma =  await Idioma.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedIdioma);
}

module.exports = {
    getIdioma,
    getIdiomas,
    createIdioma,
    updateIdioma,
    deleteIdioma
};