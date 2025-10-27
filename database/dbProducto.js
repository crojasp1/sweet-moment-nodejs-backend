import mongoose from "mongoose";
//const url = 'mongodb://localhost:27017/tienda';

//mongoose.connect(url);

const URL = process.env.MONGO_URI;

mongoose.connect(URL)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

const db = mongoose.connection;
db.on('open', ()=>{
  console.log("La conexion a MongoDB fue exitosa!");
});
db.on('error', ()=>{
  console.log("Error al conectar a MongoDB!");
});

export default db;