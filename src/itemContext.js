import { createContext, useState, useEffect, useContext } from "react";
import {doc, collection, updateDoc, setDoc} from "firebase/firestore";
import { db } from "./firebaseinit";
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
    console.log(cartData);
    let cartItem;
    const itemIndex = cartData.findIndex((curr)=> curr.id === item.id );

    if(itemIndex === -1){
      cartItem = {
        ...item,
        count: 1,
      }
      // cartData.push(cartItem);
      setTotal((total + item.price).toFixed(2));
      setCartData([...cartData, cartItem]);
    } else{
      cartItem = cartData;
      cartItem[itemIndex].count++;
      setCartData(cartItem);
      setTotal((total + item.price).toFixed(2));
    }
    console.log(cartData);
  } 

  const reduceItemInCart = (item)=>{
    const itemIndex = cartData.findIndex((curr)=> curr.id === item.id);
    let cartItem;

    if(itemIndex === -1){
      return;
    }else{
      if(cartData[itemIndex].count > 1){
        cartItem = cartData;
        cartItem[itemIndex].count--;
        setCartData(cartItem);
        setTotal((total - item.price).toFixed(2));
      } else {
        let newCartData = cartData;
        newCartData.splice(itemIndex, 1);
        setCartData(newCartData);
        setTotal((total - item.price).toFixed(2));
      }
    }
    console.log(cartData);
  }

  const removeItemFromCart = (item)=>{
    const itemIndex = cartData.findIndex((curr)=> curr.id === item.id);
    console.log(itemIndex);

    setTotal((total - (cartData[itemIndex].count * item.price)).toFixed(2));
    let newCartData = cartData;
    newCartData.splice(itemIndex, 1);
    console.log(newCartData);
    setCartData(newCartData);
  }

  const handlePurchase = async (userId, order, total)=>{
    const orderRef = doc(collection(db, "users", userId, "orders"));
    // console.log(order);
    const orderDetails = {order,
      total: total,
      createdAt: new Date().toLocaleDateString()};
    // console.log(orderDetails);
    await setDoc(orderRef, orderDetails);
    setCartData([]);
  }

  return (
    <itemContext.Provider value = {{total, setTotal, data, handleCategoryCheck,
                                    filterData, setFilterData, addItemToCart, removeItemFromCart,
                                    cartData, reduceItemInCart, handlePurchase}}>
      {children}
    </itemContext.Provider>
  )
}

export { useValue};
