import { FETCH_PRODUCTS } from "../actions/types";

export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
