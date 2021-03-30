import React from "react";
import productData from '../productData';

export const ContextApp = React.createContext();

export const initialState = [
  ...productData
];

export const testReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.payload
      ];
    case "REMOVE_PRODUCT":
      return state.filter(product => product.name !== action.payload);
    default:
      return state
  }
};