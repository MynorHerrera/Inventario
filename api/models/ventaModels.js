const mongoose = require('mongoose');

let squema = mongoose.Schema;

let ventaSquema = new squema({
    fecha : {
        type : Date,
        default : Date.now
    },
    valor_total: Number,
    cliente:{
        type : squema.Types.ObjectId,
        ref : "Cliente"
    },
    productos : [{
        producto : {
            type : squema.Types.ObjectId,
            ref : "Producto"
        },
        cantidad : Number,
        
    }]
});

module.exports = mongoose.model("Venta", ventaSquema)

