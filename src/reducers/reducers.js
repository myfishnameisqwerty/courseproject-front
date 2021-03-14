import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS, UPDATE_USER_NAVBAR } from "../actions/types";
const initialState ={
  user:null
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
    default:
      return state;
  }
};
