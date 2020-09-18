//requerimos la configuración del puerto
require('./config/config');

//requerimientos dependencias
const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

//Variables de entorno
const app = express()
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});


const port = process.env.PORT

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Llamar al archivo con todas las rutas
app.use(require("./router/indexRouter"));

//Conexion a la base de datos de mongodb
mongoose.connect('mongodb://localhost:27017/inventario',{useNewUrlParser: true}, (err)=>{
    if(err){
        console.log(err);
     }else{
         console.log("Conexión Exitosa a la base de datos");
     }
});

app.listen(port, () => {
  console.log(`Conexión existosa al puerto: ${port}`)
})

