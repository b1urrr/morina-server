import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  images: [String],
  colors: [String],
  description: String,
  category: String,
  featured: Boolean,
});

const AllProducts = mongoose.model("AllProducts", productSchema);
export default AllProducts;
