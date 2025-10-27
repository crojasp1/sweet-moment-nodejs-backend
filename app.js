import express from 'express';
import cors from 'cors';
import db from './database/dbProducto.js';
import router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3001; 

// middlewares
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router);

app.listen(PORT, () => {
  console.log(`Servidor UP corriendo en http://localhost:${PORT}/`);
});
