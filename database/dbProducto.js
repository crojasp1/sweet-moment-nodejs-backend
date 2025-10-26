import mongoose from "mongoose";
const url = 'mongodb://localhost:27017/tienda';

mongoose.connect(url);

const db = mongoose.connection;
db.on('open', ()=>{
  console.log("La conexion a MongoDB fue exitosa!");
});
db.on('error', ()=>{
  console.log("Error al conectar a MongoDB!");
});

export default db;