var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nombre : {
        type: String,
        required : [true, "Es necesario ingresar el nombre"]
    },
    telefono : {
        type: String,
        required : false
    },
    direccion : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('Cliente', clienteSchema)