require('dotenv').config()

const express = require('Express')
const cors = require('cors')

const { dbConnection } = require('./database/config')

//Crear el servidor Express
const app = express()

//Configurar CORS
app.use(cors())

// Lectura y parseo del Body
app.use(express.json())

// Base de datos
dbConnection();

//mean_user
//ykdZCWVV7HcW12jc

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/login', require('./routes/auth'))


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})