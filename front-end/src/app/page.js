"use client";
import { ItemCard } from "./components/ItemCard";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
const url = "http://localhost:1234/product/get";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data?.products);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Nav />
      <div className="w-full flex flex-wrap">
        {products.map((p) => (
          <ItemCard item={p} />
        ))}
      </div>
    </>
  );
}
