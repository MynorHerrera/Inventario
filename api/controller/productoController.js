const Producto = require('./../models/productoModels');

let guardar = (req, res)=>{
    let producto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria
    });

    producto.save((err, productoNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            productoNew
        });
    });
}

let listar = (req, res)=>{

    Producto.find({}).exec((err, datos)=>{
        return res.json({datos})
    });

}


module.exports = {
    guardar,
    listar
}