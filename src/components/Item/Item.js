import { useState } from "react";
import style from "./Item.module.css";

const Item = ({imgLink, description, price})=> {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = ()=> {
    setIsClicked(true);
    setTimeout(()=> {
      setIsClicked(false);
    }, 2000);
  }

  return (
    <div className="col">
      <div className={`card ${style.card_self}`}>
        <img src={imgLink} alt="" className={`card-img-top ${style.img_size}`}/>
        <div className="card-body">
          <span className="d-inline-block text-truncate" style={{maxWidth: 150}}>{description}</span>
          <p>&#x20B9;{price}</p>  
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