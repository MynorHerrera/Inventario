const express = require('express');
const {auth} = require('../middleware/autenticacion');
const clienteController = require('./../controller/clienteController')



var router = express.Router();

//construyendo las rutas para las diferentes opciones
//router.post("/cliente", auth, ClienteController.guardar);
router.get("/cliente", auth, clienteController.listar);
//router.get("/usuario/:id", auth, productoController.ver);
//router.put("/usuario/:id", auth, usuarioController.modificar);
//router.delete("/usuario/:id/:estado", auth, usuarioController.eliminar);

//router.post("/login", usuarioController.login);


module.exports = router;