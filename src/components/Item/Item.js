import { useState } from "react";
import style from "./Item.module.css";
import { useValue } from "../../itemContext";
import { useLocation } from "react-router-dom";

const Item = ({item})=> {
  const [isClicked, setIsClicked] = useState(false);
  const value = useValue();
  const location = useLocation();

  // console.log(location.pathname);

  const handleClick = ()=> {
    setIsClicked(true);
    setTimeout(()=> {
      setIsClicked(false);
    }, 2000);
    value.addItemToCart(item);
  }

  return (
    <div className="col">
      <div className={`card ${style.card_self}`}>
        <img src={item.imgLink} alt="" className={`card-img-top ${style.img_size}`}/>
        <div className="card-body">
          <span className="d-inline-block text-truncate" style={{maxWidth: 150}}>{item.title}</span>
          <p>&#x20B9;{item.price}</p>  
          <button type="button" className={`btn ${style.btn_color}`}
            onClick={()=> handleClick()}  
          >
            {isClicked ? "Adding": "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}


export default Item;