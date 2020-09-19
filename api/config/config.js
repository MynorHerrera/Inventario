//toma el puerto si no lo tiene agregamos el 3000
process.env.PORT = process.env.PORT || 3000;

//Clave secreta para json web token
process.env.SECRET = process.env.SECRET || "tres-tristes-tigres"

process.env.NODE_ENV = process.env.PORT || 'dev'

if(process.env.NODE_ENV == 'dev'){
    process.env.MONGOURL = 'mongodb://localhost:27017/inventario'
}else{
    process.env.MONGOURL = 'mongodb+srv://mynor:@Mynor0992@inventario.ytu67.mongodb.net/inventario?retryWrites=true&w=majority'
}