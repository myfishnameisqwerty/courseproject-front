import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "../actions/types";

export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
    case FILTER_PRODUCTS:
        return {...state, filtred: action.payload.items }
    case SORT_PRODUCTS:
        return {...state, filtred: action.payload.items}
    default:
      return state;
  }
};
