import { useValue } from "../../itemContext";
import Item from "../Item/Item";
const CartItemContainer = ()=>{
  const value = useValue();

  return (
    <div className="col">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {value.cartData.map((cartItem)=> <Item key={cartItem.id} item={cartItem}/>)}
      </div>
    </div>
  )
}

export default CartItemContainer;