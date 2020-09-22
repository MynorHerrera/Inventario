const express = require('express');

const app = express();

app.use("/api", require("./usuarioRouter"));
app.use("/api", require("./productoRouter"));
app.use("/api", require("./clienteRouter"));
app.use("/api", require("./ventaRouter"));
module.exports = app;

