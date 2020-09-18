const Venta = require("./../models/ventaModels");
const Producto = require("./../models/productoModels");

let guardar = (req, res) => {

    let body = req.body;

    validar_cantidad(body.productos_detalle, (respuesta) => {
        if (respuesta == false)
            return res.json({
                ok: false,
                mensaje: "No hay productos para guardar"
            });

        let venta = new Venta({
            valor_total: body.total,
            cliente: body.cliente,
            productos: respuesta
        });

        venta.save((err, ventaNew) => {
            if (err)
                return res.json({
                    ok: false,
                    err
                });

            res.json({
                ok: true,
                mensaje:"Producto guardado correctamente",
                ventaNew
            })
        })
    });


}

let validar_cantidad = (productos, callback) => {

    let productos_id = [];

    productos.forEach(element => {
        productos_id.push(element.producto_id);
    });

    let respuesta = [];

    Producto.find({})
        .where("_id").in(productos_id)
        .exec((err, data) => {



            data.forEach(e => {

                let cantidad = productos.find(p => p.producto_id == e._id).cantidad;

                if (cantidad <= e.cantidad) {
                    cantidad_nueva = e.cantidad - cantidad;

                    let modifica = Producto.findByIdAndUpdate(e._id, { cantidad: cantidad_nueva }, (err, data) => {
                        if (err)
                            return;
                    })
                    if (modifica != false) {
                        respuesta.push({
                            productos: e._id,
                            cantidad: cantidad
                        })
                    }

                }
            })
            callback(respuesta.length == 0 ? false : respuesta);
        })
}


module.exports = {
    guardar
}