import express from 'express';
import {createProduct, deleteProductById, getProductById, getProducts, putProductById} from '../controller/product.controller.js'; // Importing product controller functions

const router = express.Router();


router.post('/', createProduct);

router.delete("/:id", deleteProductById); 

router.get("/:id", getProductById);

router.get("/", getProducts);

router.put("/:id", putProductById);


export default router; // Export the router to be used in the main server file