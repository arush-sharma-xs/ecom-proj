"use client"

import React from 'react'

export default function page() {
  // title, desc, category, price, stock

  
  const handleSubmit = () => {
    console.log("willhandle submit")

  }
  
  return (
    <div className="flex p-2 flex-col">
      <h2>Add Product Form</h2>
        <form action="#" onSubmit={handleSubmit} className="w-[500px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Title </label>
              <input type="text" name="productTitle" placeholder="Enter Product Title"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Description </label>
              <input type="text" name="productDesc" placeholder="Enter Product Description"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product price </label>
              <input type="text" name="productDesc" placeholder="Enter Product Description"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Category </label>
              <select name="productCategory">
                  <option value="electronic">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Image </label>
              <input type="file" name="productImages" accept="image/*"  />
            </div>
            
          <button className="p-2 m-2 bg-green-300 rounded-lg font-bold" type="submit">Add Product </button>
        </form>

    </div>
  )
}
