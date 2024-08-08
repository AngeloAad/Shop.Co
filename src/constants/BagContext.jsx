// src/constants/BagContext.js
import React, { createContext, useReducer, useContext } from "react";

const BagContext = createContext();

const initialState = {
  items: [],
};

const bagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.payload.name &&
          item.size === action.payload.size &&
          item.color === action.payload.color
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(item.name === action.payload.name &&
              item.size === action.payload.size &&
              item.color === action.payload.color)
        ),
      };

    default:
      return state;
  }
};

export const BagProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bagReducer, initialState);

  return (
    <BagContext.Provider value={{ state, dispatch }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
