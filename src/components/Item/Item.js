import { useState } from "react";
import style from "./Item.module.css";

const Item = ({imgLink, description, price})=> {
  const [isClicked, SetIsClicked] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <img src={imgLink} alt="" />
        <p className="card-text">{description}</p>
        <p>&#x20B9;{price}</p>  
        <button type="button" className={`btn ${style.btn_color}`}>
          {isClicked ? "Adding": "Add To Cart"}
        </button>
      </div>
    </div>
  )
}


export default Item;