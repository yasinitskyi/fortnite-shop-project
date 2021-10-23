export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "ADD_TO_CART": {
      const newOrder = [...state.order];
      const itemIndex = newOrder.findIndex((elem) => elem.id === payload.id);
      if (itemIndex >= 0) newOrder[itemIndex] = { ...newOrder[itemIndex], quantity: newOrder[itemIndex].quantity + 1 };
      else newOrder.push({ ...payload, quantity: 1 });
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "ADD_QUANTITY": {
      const newOrder = [...state.order];
      const itemIndex = newOrder.findIndex((elem) => elem.id === payload.id);
      newOrder[itemIndex] = { ...newOrder[itemIndex], quantity: newOrder[itemIndex].quantity + 1 };
      return {
        ...state,
        order: newOrder,
      };
    }
    case "REMOVE_QUANTITY": {
      const newOrder = [...state.order];
      const itemIndex = newOrder.findIndex((elem) => elem.id === payload.id);
      newOrder[itemIndex] = {
        ...newOrder[itemIndex],
        quantity: newOrder[itemIndex].quantity === 1 ? newOrder[itemIndex].quantity : newOrder[itemIndex].quantity - 1,
      };
      return {
        ...state,
        order: newOrder,
      };
    }
    case "HANDLE_BASKET_VISIBILITY":
      return {
        ...state,
        isBasketVisible: !state.isBasketVisible,
      };
    default:
      return state;
  }
}
