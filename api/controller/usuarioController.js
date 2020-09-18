const Usuario = require('./../models/usuarioModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let listar = (req, res)=>{

    Usuario.find({}).exec((err, datos)=>{
        return res.json({
            datos
        })
    })

}

let guardar = (req, res)=>{
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10) //se encripta la contraseña con bcrypt
    });

    usuario.save((err, usuarioNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            usuarioNew
        });
    });
}

let modificar = (req, res)=>{
    let usuario ={
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        usuario: req.body.usuario,
        clave: bcrypt.hashSync(req.body.clave, 10) //se encripta la contraseña con bcrypt
    }

    Usuario.findByIdAndUpdate(req.params.id, usuario, { new : true }, (err, usuarioNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok : true,
            usuarioNew
        });
    });
    
}

let eliminar = (req, res)=>{
    Usuario.findByIdAndUpdate(req.params.id, {estado : req.params.estado}, { new : true }, (err, usuarioNew)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok : true,
            usuarioNew
        });
    });
}

let ver = (req, res)=>{
    
    Usuario.findById(req.params.id).exec((err, datos)=>{
        return res.json({
            datos
        });
    });

}

let login = (req, res) =>{
    Usuario.findOne({usuario : req.body.usuario}, (err, usuario)=>{
        
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        
        if(!usuario){
            return res.status(404).json({
                ok:false,
                mensaje: "Usuario o clave invalida"
            });
        }

        if(!bcrypt.compareSync(req.body.clave, usuario.clave)){
            return res.status(404).json({
                ok:false,
                mensaje: "Usuario o clave invalida"
            });
        }

        let token = jwt.sign({
            data: usuario
          }, process.env.SECRET, { expiresIn: '4h' });

        res.json({
            ok: true,
            usuario,
            token
        })

    });
}

module.exports = {
    listar,
    guardar,
    modificar,
    ver,
    eliminar,
    login
}