"use client";

import React, { useEffect, useState } from "react";
import Products from "./components/Products";

export default function page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => setProduct(product.products));
  }, [setProduct]);

  return (
    <div className="">
      <h3>Product Page</h3>
      {product.length > 0 && <Products product={product}/> }
      {product.length <= 0 && <div>No product found</div>}
    </div>
  );
}
