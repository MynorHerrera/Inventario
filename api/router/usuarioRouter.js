const express = require('express');
const {auth} = require('./../middleware/autenticacion');
var usuarioController = require('./../controller/usuarioController');

var router = express.Router();

//construyendo los rutas para las diferentes opciones

router.get("/usuario", auth, usuarioController.listar);
router.post("/usuario", auth, usuarioController.guardar);
router.get("/usuario/:id", auth, usuarioController.ver);
router.put("/usuario/:id", auth, usuarioController.modificar);
router.delete("/usuario/:id/:estado", auth, usuarioController.eliminar);

router.post("/login", usuarioController.login);

module.exports = router;