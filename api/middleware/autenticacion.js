const jwt = require('jsonwebtoken');

let auth = (req, res, next) =>{
    let token = req.get("Authorization")

    jwt.verify(token, process.env.SECRET, (err, usuario)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                mensaje: "Token no valido"
            })
        }
        //permite capturar datos del usuario logiado utilizando las peticiones
        req.usuario = usuario.data;
        next();
    })
}

module.exports = {
    auth
}