import { createContext, useState, useEffect, useContext } from "react";

const itemContext = createContext();

function useValue(){
  const value = useContext(itemContext);
  return value;
}

export default function CustomItemContext({children}){

  // const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  async function fetchData(){
    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              setData(json);
              setFilterData(json);
            });
    console.log(filterData);
  };

  const handleCategoryCheck = (event)=>{
    if(event.target.checked){
      fetch(`https://fakestoreapi.com/products/category/${event.target.value}`)
            .then(res=>res.json())
            .then(json=>setFilterData(json));
      console.log(filterData);
    }else{
      //iterate over the data and remove the data that is unchecked
    }
  }

  const addItemToCart =(item)=>{
    const itemIndex = cartData.findIndex((curr)=> curr.id === item.id );

    if(itemIndex === -1){
      const cartItem = {
        ...item,
        count: 1,
      }
      cartData.push(cartItem);
      setTotal(total + item.price);
      setCartData([...cartData]);
    } else{
      setCartData(prev => prev[itemIndex].count++);
      setTotal(total + item.price);
    }
  } 

  const removeItemFromCart = (item)=>{
    const itemIndex = cartData.findIndex((curr)=> curr.id === item.id);

    if(itemIndex === -1){
      return;
    }else{
      if(cartData[itemIndex].count > 1){
        setCartData(prev => prev[itemIndex].count--);
        setTotal(total - item.price);
      } else {
        const newCartData = cartData.splice(itemIndex, 1);
        setCartData(newCartData);
        setTotal(total - item.price);
      }
    }
  }

  return (
    <itemContext.Provider value = {{total, setTotal, data, handleCategoryCheck,
                                    filterData, setFilterData, addItemToCart, removeItemFromCart,
                                    cartData}}>
      {children}
    </itemContext.Provider>
  )
}

export { useValue};
