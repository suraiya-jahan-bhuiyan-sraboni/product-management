import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  ratings: Number,
  image: String,
});

const Product = mongoose.models.products || mongoose.model('products', ProductSchema);

export default Product;
