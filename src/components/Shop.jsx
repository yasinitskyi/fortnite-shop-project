import React, { useEffect, useContext } from "react";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";

export default function Shop() {
  const { loading, setGoods, isBasketVisible, alertName } = useContext(ShopContext);

  useEffect(function GetInitialGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.fish && setGoods(data.fish);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketVisible && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}
