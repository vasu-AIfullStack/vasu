import express from "express";
import dotenv from "dotenv"; // Importing dotenv to manage environment variables
import { connectDB } from "./config/db.js"; // Importing the database connection function
import productRoutes from './routers/product.router.js'; // Importing the product routes


dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000; // Set the port from environment variable or default to 5000

app.use(express.json()); // Middleware to parse JSON request bodies

// app.get("/products", (req, res) => {
//   res.send("API is running... test");
// });

app.use("/api/products", productRoutes); // Use the product routes under the /api path

console.log(process.env.MONGO_URI); // Log the MongoDB URI to ensure it's loaded correctly

// app.listen(PORT, () => {
// //  connectDB(); // Connect to the database when the server starts
//   console.log("Connected to MongoDB");
//   // Start the server on port 5000
//   console.log("Server at running on port 5000 http://localhost:5000 ");
// });