var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre : {
        type: String,
        required : [true, "Es necesario ingresar el nombre"]
    },
    apellido : {
        type: String,
        required : [true, "Es necesario ingresar el apellido"]
    },
    telefono : {
        type: String,
        required : true
    },
    usuario : {
        type: String,
        required : true
    },
    clave : {
        type: String,
        required : true
    },
    estado : {
        type: Boolean,
        required:false,
        default : true
    },
    fechaCreacion : {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Usuario', usuarioSchema)