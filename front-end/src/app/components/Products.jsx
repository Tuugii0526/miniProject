const url = "http://localhost:1234/product/get";
import { ItemCard } from "./ProductCard";
import { fetchProducts } from "@/lib/data";
export const Products= async()=>{
   const products=await fetchProducts()
    return <div className="w-full grid grid-cols-3 gap-6">
    {products?.map((p) => (
      <ItemCard key={p?.id} item={p} />
    ))}
  </div>
}