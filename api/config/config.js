//toma el puerto si no lo tiene agregamos el 3000
process.env.PORT = process.env.PORT || 3000;

//Clave secreta para json web token
process.env.SECRET = process.env.SECRET || "tres-tristes-tigres"