
import React, { createContext, useContext, useReducer , useState} from 'react';

export const CartContext = createContext();

const initialState = {};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, [action.id]: 1 };
    case 'UPDATE':
      return { ...state, [action.id]: action.qty };
    case 'REMOVE':
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  console.log("cart",cart);
  
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const showMaxQuantitySnackbar = () => setSnackbarVisible(true);

  return (
    <CartContext.Provider value={{ 
        cart, 
        dispatch,
        snackbarVisible,
        setSnackbarVisible,
        showMaxQuantitySnackbar, }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

