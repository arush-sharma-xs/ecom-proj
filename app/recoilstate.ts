import { selector, atom } from 'recoil';

export interface Item {
  title : string;
  desc : string;
  category :string;
  price : number;
  sku : string;
}

const cartState = atom({
  key: "cart",
  default: [] as Item[]
});

const cartItemsList = selector({
  key : "cartItemsList",
  get : ({get}) => {
      const allItemsInCart = get(cartState)
      return allItemsInCart;
  }
})

const cartTotal = selector({
  key : "cartTotal",
  get : ({get}) => {
    let total = 0;
    const items = get(cartState);

    items.forEach((item:any) => {
      total+= item.qty * item.item.price
    })
    
    return total.toPrecision(4)
  }
})

export {cartItemsList, cartState, cartTotal}