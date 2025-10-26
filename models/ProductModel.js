import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    nombre: {type: String},
    descripcion: {type:String},
    precio: {type: Intl},
    stock: {type:Intl}
  }, 
  {collection: 'productos'}
);

export default mongoose.model('ProductModel', ProductSchema);

