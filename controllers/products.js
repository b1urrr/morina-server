import AllProducts from "../models/allProductsModel.js";

export const getProducts = async (req, res) => {
  try {
    const getAllProducts = await AllProducts.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new AllProducts(product);
  console.log(newProduct)
  console.log(product)
  try {
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
