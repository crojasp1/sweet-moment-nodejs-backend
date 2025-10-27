import express from 'express';
import cors from 'cors';
import db from './database/dbProducto.js';
import router from './routes/routes.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router);

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

app.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No se subió ninguna imagen' });
  const imageUrl = `https://sweet-moment-nodejs-backend.onrender.com/uploads/${req.file.filename}`;
  res.json({ success: true, image_url: imageUrl });
});

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Servidor UP corriendo en http://localhost:${PORT}/`);
});
