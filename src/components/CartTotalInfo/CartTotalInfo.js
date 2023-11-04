import { useAuthValue } from "../../authContext";
import { useValue } from "../../itemContext";

const CartTotalInfo = ()=>{
  const value = useValue();
  const authValue = useAuthValue();

  return(
    <div className="col">
      <div className="card">
        <div className="card-body">
          <span>TotalPrice:-&#x20B9;{value.total}/-</span>
          <div class="d-grid gap-2">
              <button type="submit" className="btn btn-primary"
                onClick={()=>value.handlePurchase(authValue.userId, value.cartData, value.total)}
              >
                Purchase
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTotalInfo;