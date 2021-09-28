import React, {useState, useEffect} from "react";
import Preloader from "./Preloader";
import GoodsList from './GoodsList';
import {API_KEY, API_URL} from '../config';

export default function Shop(props) {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function GetInitialGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    }).then(response => response.json())
      .then(data => {
        data.fish && setGoods(data.fish);
        console.log(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      {loading ? <Preloader /> : <GoodsList goods={goods}/>}
    </main>
  )
}