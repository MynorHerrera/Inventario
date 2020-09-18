var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productoSchema = new Schema({
    nombre : {
        type: String,
        required : [true, "Es necesario ingresar el nombre"]
    },
    precio : {
        type: Number,
        required : true
    },
    cantidad : {
        type: Number,
        required : true
    },
    categoria : {
        type: String,
        required : true
    },
    fechaCreacion : {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Producto', productoSchema)