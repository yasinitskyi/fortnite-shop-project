import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketVisible: false,
  alertName: "",
};

export default function ContextProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.removeFromCart = (itemID) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemID } });
  };

  value.removeQuantity = (id) => {
    dispatch({ type: "REMOVE_QUANTITY", payload: { id: id } });
  };

  value.addQuantity = (id) => {
    dispatch({ type: "ADD_QUANTITY", payload: { id: id } });
  };

  value.handleBasketVisibility = () => {
    dispatch({ type: "HANDLE_BASKET_VISIBILITY" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS" , payload: data})
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
