import { useState } from "react";
import style from "./Item.module.css";
import { useValue } from "../../itemContext";
import { useLocation } from "react-router-dom";
import { useAuthValue } from "../../authContext";

const Item = ({item})=> {
  const [isClicked, setIsClicked] = useState(false);
  const value = useValue();
  const authValue = useAuthValue();
  const location = useLocation();

  // console.log(location.pathname);

  const handleClick = ()=> {
    setIsClicked(true);
    setTimeout(()=> {
      setIsClicked(false);
    }, 2000);
    if(location.pathname == "/cart"){
      value.removeItemFromCart(item);
    }else {
      value.addItemToCart(item);
    }
    
  }

  return (
    <div className="col">
      <div className={`card ${style.card_self}`}>
        <img src={item.image} alt="" className={`card-img-top ${style.img_size}`}/>
        <div className="card-body">
          <span className="fs-5 d-inline-block text-truncate" style={{maxWidth: 150}}>{item.title}</span>
          <div >
            <span className="fs-5">&#x20B9;{item.price}</span>
            {
              location.pathname == "/cart" && 
              <div className={style.item_count_container}>
                <i className="fa-solid fa-circle-minus fa-lg"
                  onClick={()=>value.reduceItemInCart(item)}></i>
                <span className="fs-5">{item.count}</span>
                <i className="fa-solid fa-circle-plus fa-lg"
                  onClick={()=>value.addItemToCart(item)}></i>
              </div>
            }
          </div>  
          <button type="button" className={`btn ${style.btn_color}`}
            onClick={()=> handleClick()}  
          >
            {(location.pathname == "/cart")? (isClicked ? "Removing": "Remove From Cart"):(isClicked ? "Adding": "Add To Cart")}
          </button>
        </div>
      </div>
    </div>
  )
}


export default Item;