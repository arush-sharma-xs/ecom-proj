import React from 'react'

export default function Products({product:products} : any) {

  return (
    <div> {products.map((item) => { 
      return <div className="w-[400px] p-2 border-2" key={item.sku}>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm">Category : {item.category}</p>
                  <button>Add to Cart </b
              </div>})}</div>
  )
}
