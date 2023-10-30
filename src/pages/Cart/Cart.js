import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";
import CartTotalInfo from "../../components/CartTotalInfo/CartTotalInfo";
import { useValue } from "../../itemContext";

const Cart = ()=> {
  const isLoggedIn = false;
  const value = useValue();

  return (
    <>
      {
        isLoggedIn &&
        <>
          {value.cartData.length === 0 && <span className="fs-1 fw-bold">Cart is Empty</span>}
          {
            value.cartData.length !== 0 &&
            <div>
              <CartTotalInfo/>
              <CartItemContainer />
            </div>
          } 
        </>
      }
    </>
  )
}

export default Cart;