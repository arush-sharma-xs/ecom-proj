import { cartItemsList, cartState, cartTotal } from "@/app/recoilstate";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Item from "./Item";

// utility for creating unique Id
let id = 0;
function getID() {
  return id++;
}

function CartItems() {
  const cartItems = useRecoilValue(cartItemsList);
  const setCartItems = useSetRecoilState(cartState);
  const total = useRecoilValue(cartTotal);
  const handleRemove = (sku:any) => {
    let newItems = cartItems.filter((item:any) => {return item.item.sku !== sku});
    setCartItems(() => [...newItems])
  };

  return (
    <div className="border-2 h-[500px] w-[400px]">
      <p>Items in Cart : {cartItems.length} </p>
      {cartItems.map((item: any) => {
        return <Item key={getID()} item={item} handleRemove={handleRemove} />;
      })}

      <p>Total : ${total} </p>
      
    </div>
  );
}

export default CartItems;