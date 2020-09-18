const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use("/api", require("./usuarioRouter"));
app.use("/api", require("./productoRouter"));
app.use("/api", require("./clienteRouter"));
app.use("/api", require("./ventaRouter"));
module.exports = app;

