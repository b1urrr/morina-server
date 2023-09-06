import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  company: String,
  description: String,
  category: String,
  shipping: Boolean,
});

const AllProducts = mongoose.model("AllProducts", productSchema);
export default AllProducts;
