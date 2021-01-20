require('dotenv').config()

const express = require('Express')
const cors = require('cors')

const { dbConnection } = require('./database/config')

//Crear el servidor Express
const app = express()

//Configurar CORS
app.use(cors())

// Base de datos
dbConnection();

//mean_user
//ykdZCWVV7HcW12jc

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    })

})

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})