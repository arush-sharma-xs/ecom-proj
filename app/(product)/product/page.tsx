"use client";
import React, { useEffect, useState } from "react";

import Products from "./components/Products";
import CartItems from "./components/CartItems";


export default function Page() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => setProduct(product.products));

    setLoading(false)
  }, [setProduct]);

  return (
    <div className="flex pt-6 ">
      <div className="flex flex-col items-center w-[1000px]">
        <h3 className="text-3xl font-bold">Product Page</h3>
        {loading && <p>Loading</p>}
        {product.length > 0 && <Products product={product} />}
        {product.length <= 0 && <div>No product found</div>}
      </div>
      <CartItems />
    </div>
  );
}



