import React, {useState, useEffect} from "react";
import Preloader from "./Preloader";
import GoodsList from './GoodsList';
import Cart from './Cart';
import {API_KEY, API_URL} from '../config';

export default function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addToCart = (item) => {
    // const itemIndex = order.findIndex(elem => elem.id === item.id);
    // if (itemIndex < 0) {
    //   const newItem = { ...item, quantity: 1 };
    //   setOrder([...order, newItem]);
    // } else {
    //   const newOrder = order.map((elem, index) => {
    //     if (index === itemIndex) {
    //       return {...elem, quantity: elem.quantity + 1};
    //     } else {
    //       return elem;
    //     }
    //   });
    //   setOrder(newOrder);
    // }
    const newOrder = [...order];
    const itemIndex = newOrder.findIndex((elem) => elem.id === item.id);
    if (itemIndex >= 0) newOrder[itemIndex] = { ...newOrder[itemIndex], quantity: newOrder[itemIndex].quantity + 1 };
    else newOrder.push({ ...item, quantity: 1 });
    setOrder(newOrder);
  }

  useEffect(function GetInitialGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    }).then(response => response.json())
      .then(data => {
        data.fish && setGoods(data.fish);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>}
    </main>
  )
}