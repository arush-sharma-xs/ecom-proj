import { cartState } from "@/app/recoilstate";
import { useState } from "react";
import { useRecoilState } from "recoil";

function Item({
  item: itemData,
  handleRemove,
}: {
  item: any;
  handleRemove: (sku: string) => void;
}) {
  const { item } = itemData;
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(itemData.qty);
  
  const handleChange = (quantity: number, sku: string) => {
    setQuantity(quantity)  
    const index = cartItems.findIndex((item: any) => item.item.sku === sku);
    let newItem = JSON.parse(JSON.stringify(cartItems[index]));
    newItem.qty = quantity
    setCartItems((oldState) => [...oldState.slice(0,index), newItem, ...oldState.slice(index+1)])
  };

  return (
    <div className="flex items-center rounded-lg gap-4 ">
      <h4>{item.title}</h4>
      <p className="font-bold">{item.price}</p>
      <div className="p-1 bg-blue-200 flex rounded-md">
        <input
          type="number"
          min="1"
          max="10"
          defaultValue={quantity}
          onChange={(e) => handleChange(parseInt(e.target.value), item.sku)}
          name="counter"
        />
      </div>
      <button
        className="p-2 bg-red-400 text-white text-sm rounded-md"
        onClick={() => handleRemove(item.sku)}
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
