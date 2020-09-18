const express = require('express');
const {auth} = require('./../middleware/autenticacion');
const productoController = require('./../controller/productoController')


var router = express.Router();

//construyendo las rutas para las diferentes opciones
router.post("/producto", auth, productoController.guardar);
router.get("/producto", auth, productoController.listar);
//router.get("/usuario/:id", auth, productoController.ver);
//router.put("/usuario/:id", auth, usuarioController.modificar);
//router.delete("/usuario/:id/:estado", auth, usuarioController.eliminar);

//router.post("/login", usuarioController.login);


module.exports = router;