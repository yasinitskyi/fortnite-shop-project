import React, {useState, useEffect} from "react";
import Preloader from "./Preloader";
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from "./Alert";
import {API_KEY, API_URL} from '../config';

export default function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketVisible, setBasketVisible] = useState(false);
  const [alertName, setAlertName] = useState('');

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
    setAlertName(item.name);
  }

  const removeQuantity = (id) => {
    const newOrder = [...order];
    const itemIndex = newOrder.findIndex((elem) => elem.id === id);
    newOrder[itemIndex] = {
      ...newOrder[itemIndex],
      quantity: newOrder[itemIndex].quantity === 1 ? newOrder[itemIndex].quantity : newOrder[itemIndex].quantity - 1
    };
    setOrder(newOrder);
  }

  const addQuantity = (id) => {
    const newOrder = [...order];
    const itemIndex = newOrder.findIndex((elem) => elem.id === id);
    newOrder[itemIndex] = { ...newOrder[itemIndex], quantity: newOrder[itemIndex].quantity + 1 };
    setOrder(newOrder);
  }

  const removeFromCart = (itemID) => {
    const newOrder = order.filter(item => item.id !== itemID);
    setOrder(newOrder);
  }

  const handleBasketVisibility = () => {
    setBasketVisible(!isBasketVisible);
  }

  const closeAlert = () => {
    setAlertName('');
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
      <Cart quantity={order.length} handleBasketVisibility={handleBasketVisibility}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
      {isBasketVisible && (
        <BasketList
          order={order}
          handleBasketVisibility={handleBasketVisibility}
          removeFromCart={removeFromCart}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
        />
      )}
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert} />
      }
    </main>
  )
}