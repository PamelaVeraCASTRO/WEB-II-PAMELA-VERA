const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            products: '/api/products',
            categories: '/api/categories',
            idiomas: '/api/idiomas',
            palabras: '/api/palabras',
            registro: '/api/registro'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.products, require('./routes/products')   )
        this.app.use(this.paths.categories, require('./routes/categories')   )
        this.app.use(this.paths.idiomas, require('./routes/idioma')   )
        this.app.use(this.paths.palabras, require('./routes/palabras')   )
        this.app.use(this.paths.registro, require('./routes/registro')   )

    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}
module.exports = Server;