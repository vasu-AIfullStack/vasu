import mangoos from "mongoose";
const productSchema = new mangoos.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // timestamps will create createdAt and updatedAt fields automatically
);

const Product = mangoos.model('Product', productSchema);
export default Product;