const express = require('express');
const {auth} = require('../middleware/autenticacion');
const ventaController = require('./../controller/ventaController')



var router = express.Router();

//construyendo las rutas para las diferentes opciones
router.post("/venta", auth, ventaController.guardar);
//router.get("/venta", auth, ventaController.listar);
//router.get("/usuario/:id", auth, productoController.ver);
//router.put("/usuario/:id", auth, usuarioController.modificar);
//router.delete("/usuario/:id/:estado", auth, usuarioController.eliminar);

//router.post("/login", usuarioController.login);


module.exports = router;