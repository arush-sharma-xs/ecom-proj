import { useSetRecoilState } from "recoil";
import {cartState, cartTotal} from "@/app/recoilstate"
function Product(props:any) {

  const setCartState = useSetRecoilState<any>(cartState)
  const setCartTotal = useSetRecoilState(cartTotal);

  const addToCart = (item:any) => {
    setCartState((oldCart:any) => [...oldCart, {item, qty : 1}])  
  }

  return (
    <div className="w-[400px] p-2 border-2">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p className="text-sm truncate">{props.desc}</p>
      <p className="text-sm" >Category : {props.category}</p>
      <button onClick={() => addToCart(props)} className="p-2 bg-black text-white rounded-md">Add to Cart </button>
    </div>
  );
}

export default Product;