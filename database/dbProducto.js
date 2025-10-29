import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// 🔹 Leer la variable de entorno
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ No se encontró la variable MONGO_URI. Verifica tu configuración en Render o en el archivo .env");
  process.exit(1); // Detiene la app si no existe la URI
}

// 🔹 Conectarse a MongoDB Atlas
mongoose.connect(MONGO_URI, {
  dbName: "sweetmomentdb" // ✅ puedes especificar el nombre aquí
})
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => {
    console.error("❌ Error al conectar a MongoDB:", err.message);
    process.exit(1);
  });

// 🔹 Eventos de conexión
const db = mongoose.connection;

db.on("open", () => {
  console.log("🚀 La conexión a MongoDB fue exitosa!");
});

db.on("error", (err) => {
  console.error("❌ Error al conectar a MongoDB:", err.message);
});

export default db;
