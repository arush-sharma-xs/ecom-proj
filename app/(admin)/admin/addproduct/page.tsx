"use client"

import React, {useRef} from 'react'

export default function page() {
  // title, desc, category, price, stock
  const productImageRef = useRef();
  
  const handleSubmit = () => {
    console.log("willhandle submit")

  }

  const handleProductImageUpload = () => {
    if(productImageRef && productImageRef.current) {
      productImageRef.current.click()
    }  
  }
  
  return (
    <div className="flex p-2 flex-col items-center gap-2">
      <h2 className='text-xl font-bold'>Add Product Form</h2>
        <form action="#" onSubmit={handleSubmit} className="w-[500px] flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Title </label>
              <input type="text" name="productTitle" placeholder="Enter Product Title" className='bg-gray-100 p-2 rounded-md'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Description </label>
              <input type="text" name="productDesc" placeholder="Enter Product Description" className='bg-gray-100 p-2 rounded-md'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product price </label>
              <input type="text" name="productDesc" placeholder="Enter Product Description" className='bg-gray-100 p-2 rounded-md'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Category </label>
              <select name="productCategory" className='bg-gray-100 p-2 rounded-md'>
                  <option value="electronic">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="title">Product Image </label>
              <div onClick={handleProductImageUpload} className="bg-gray-100 w-[500px] h-[50px] flex items-center justify-center text-black/70 rounded-md cursor-pointer">
                + Click here to Add Product Images
                <input ref={productImageRef} type="file" className='hidden' name="productImages" accept="image/*"  />
              </div>
            </div>
            
          <button type="submit" className="p-2 m-2 bg-green-300 rounded-lg font-bold" type="submit">Add Product </button>
        </form>
    </div>
  )
}
