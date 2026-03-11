import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import type { ApiResponse, Product } from "../types/product.type"
import type { ProductContextType } from "../types/context.type"
import toast from "react-hot-toast";

const ProductContext = createContext<ProductContextType | null>(null);
export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_API_BASE_URL}/product/get`)
        if (response.status === 200) {
          setLoading(false);
          setProducts(response.data.products)
        } else {
          toast.error("Failed to fetch products", {
            style: { background: '#dc2626', color: 'white' },
          });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    fetchProducts();
  }, [])
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider