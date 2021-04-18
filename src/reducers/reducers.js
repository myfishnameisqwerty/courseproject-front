import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS, UPDATE_USER_NAVBAR, UPDATE_PRICE } from "../actions/types";
const initialState ={
  user:null,
  price: 0,
}
export const reducers = (state = initialState, action) => {
    
    switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
    case FILTER_PRODUCTS:
        return {...state, filtred: action.payload.items }
    case SORT_PRODUCTS:
        return {...state, filtred: action.payload.items}
    case UPDATE_USER_NAVBAR:
        return {...state, userName:action.payload.name, userRole:action.payload.role}
    case UPDATE_PRICE:
      let total =action.payload
      if (state.price){
        total += state.price
      }
        return {...state, price:total}
    default:
      return state;
  }
};
