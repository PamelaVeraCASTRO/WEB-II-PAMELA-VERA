const { Router } = require('express')
const { check } =  require('express-validator')

const { createRegistro,
     getRegistros, 
     getRegistro,
     updateRegistro,
    deleteRegistro,
    getRegistrosActivos,
    getRegistrosInactivos } = require('../controllers').Registro;
const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/registro/

router.get('/activos', getRegistrosActivos);
router.get('/inactivos', getRegistrosInactivos);


router.get('/', getRegistros);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getRegistro);

router.post('/',[
    validateFields
] , createRegistro)

router.put('/:id', updateRegistro)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteRegistro)

module.exports = router;