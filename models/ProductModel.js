import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    category: { type: String },
    old_price: { type: Number },
    new_price: { type: Number },
  },
  { collection: 'productos' }
);

export default mongoose.model('ProductModel', ProductSchema);

