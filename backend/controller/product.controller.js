import express from express
import  Product  from '../models/product.model.js'; // Importing the Product model

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Find all products in the database
    res.status(200).json(products); // Respond with the list of products
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
}

export const putProductById = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
  const product = req.body; // Destructure name and price from the request body
  try {
    const updatedProduct = await Product.findByIdAndUpdate(   
      id, product, {new: true, runValidators: true} // Find the product by ID and update it
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
    }
    res.status(200).json(updatedProduct); // Respond with the updated product
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  } 
}

export const deleteProductById = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
 console.log(id); // Log the ID to the console for debugging
  try {
    const deletedProduct = await Product.findByIdAndDelete(id); // Find and delete the product by ID
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
    }
    res.status(200).json({ message: "Product deleted successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
}

export const getProductById = async (req, res) => {
  const { id } = req.params; // Get the product ID from the request parameters
  try {
    const product = await Product.findById(id); // Find the product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
    }
    res.status(200).json(product); // Respond with the found product
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
}

export const createProduct = async (req, res) => {
  const { name, price } = req.body; // Destructure name and price from the request body

  try {
    if (!Product.name || !Product.price) {
      const product = new Product({ name, price }); // Create a new product instance
      const createdProduct = await product.save(); // Save the product to the database
      res.status(201).json(createdProduct); // Respond with the created product
    }
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
}


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id, { name, price }, { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(500).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
