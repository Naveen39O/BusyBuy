import style from "./Filter.module.css"
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

const filterData = [
  {text: "Men's Clothing",id: "mensClothing"},
  {text: "Women's Clothing",id: "womensClothing"},
  {text: "Jewelery",id: "jewelery"},
  {text: "Electronics",id: "electronics"},
]

const Filter = ()=>{
  const [filterPrice, setFilterPrice] = useState(0);

  const handleChange = (event)=> {
    setFilterPrice(event.target.value);
  }

  return (
    <aside className={`p-2 ${style.aside_container}`}>
      <div  >
        <div>
          <span className="fs-4 fw-medium">Filter</span>
          <div>
            <label for="customRange" className="form-label">Price {filterPrice}</label>
            <input type="range" className="form-range" min="0" max="100000" id="customRange" value={filterPrice}
              onChange = {(e)=> handleChange(e)}>
            </input>
          </div>
        </div>
        <div>
          <span >Category</span>
          <div>
            {filterData.map((category)=> <CheckBox text={category.text} id={category.id}/>)}
          </div>

        </div>
      </div>
    </aside>
  )
}

export default Filter;