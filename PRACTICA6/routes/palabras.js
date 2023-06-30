const { Router } = require('express')
const { check } =  require('express-validator')

const { CreatePalabra,
    getPalabras, 
     getPalabra,
     updatePalabra,
     deletedPalabra} = require('../controllers').Palabra;

const { validateFields } = require('../middlewares');

const router = Router();

///     https://localhost:3000/api/v1/products/

router.get('/', getPalabras);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getPalabra);

router.post('/',[
    check('palabra', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , CreatePalabra)

router.put('/:id', updatePalabra)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletedPalabra)

module.exports = router;
