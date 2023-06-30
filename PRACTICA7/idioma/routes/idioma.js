const { Router } = require('express')
const { check } =  require('express-validator')

const { createIdioma,
    getIdioma, 
     getIdiomas,
     updateIdioma,
     deleteIdioma } = require('../controllers').Idioma;

const { validateFields } = require('../middlewares');

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getIdiomas);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getIdioma);

router.post('/',[
    check('descripcion', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createIdioma)

router.put('/:id', updateIdioma)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteIdioma)

module.exports = router;