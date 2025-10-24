import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProduct: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      return { success: false, message: "All fields are required" };
    }
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    set((state) => ({
      products: { Products: [...state.products, data.data] },
    }));
    return { success: true, message: data.message };
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data})
  }
}));
