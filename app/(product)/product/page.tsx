"use client";

import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import { RecoilRoot, atom, useRecoilState } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export default function page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => setProduct(product.products));
  }, [setProduct]);




  return (
    <div className="flex pt-6 ">
      <div className="flex flex-col items-center w-[1000px]">
        <h3>Product Page</h3>
        {product.length > 0 && <Products product={product} />}
        {product.length <= 0 && <div>No product found</div>}
      </div>
      <ListItemsInCart />
    </div>
  );
}

function ListItemsInCart() {
  
  const [cartItems] = useRecoilState(cartState);
  const handleRemove = () => {
    console.log("remove product from cart.");
  }
 
  return (
    <div className="border-2 h-[500px] w-[400px]">
    <p>Items in Cart : {cartItems.length} </p>
      {cartItems.map((item: any) => {
        console.log(item)
        return (
          <div className="rounded-lg flex gap-2 ">
            <h4>{item.title}</h4>
            <p className="font-bold">{item.price}</p>
            <button className="p-2 bg-red-400 text-white text-sm rounded-md" onClick={handleRemove}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
