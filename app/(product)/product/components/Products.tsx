import React from "react";
import Product from "./Product";

export default function Products({ product: products }: any) {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {products.map((item: any) => (
        <Product key={item.sku}
          title={item.title}
          desc={item.description}
          category={item.category}
          price={item.price}
          sku={item.sku}
        />
      ))}
    </div>
  );
} 

