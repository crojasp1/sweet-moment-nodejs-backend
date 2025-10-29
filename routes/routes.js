import express from 'express';
import { deleteProduct, getAllProduct, getProduct, updateProduct, addproduct, getPopularInLenceria, getProductsInCart } from '../controllers/ProductController.js';
//import {} from '../controllers/ProductController.js';

const router = express.Router();

//enrutamientos
//mostrar todos los productos
router.get('/', getAllProduct);
//mostrar un solo producto buscado por el id
router.get('/:id', getProduct);
//crear un producto
router.post('/', addproduct);

//actualizar un producto
router.put('/:id', updateProduct);
//borrar un producto
router.delete('/:id', deleteProduct);
//Popular en lenceria
router.get('/popularinlenceria', getPopularInLenceria );
//Obtener productos del carrito 
router.post('/productosgetcart', getProductsInCart);


export default router;