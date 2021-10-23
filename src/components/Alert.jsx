import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export default function Alert() {
  const { alertName: name = "", closeAlert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerID);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} added to cart</div>
    </div>
  );
}
