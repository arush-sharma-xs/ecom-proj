import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../page";

export default function Products({ product: products }: any) {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {products.map((item: any) => (
        <Product key={item.sku}
          title={item.title}
          desc={item.description}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
} 

function Product(props:any) {

  const cart = useRecoilState(cartState)
  const setCartState = useSetRecoilState<any>(cartState)

  const addToCart = (item:any) => {
    setCartState((oldCart:any) => [...oldCart, item])  
  }

  return (
    <div className="w-[400px] p-2 border-2">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p className="text-sm">{props.desc}</p>
      <p className="text-sm" >Category : {props.category}</p>
      <button onClick={() => addToCart(props)} className="p-2 bg-black text-white rounded-md">Add to Cart </button>
    </div>
  );
}
