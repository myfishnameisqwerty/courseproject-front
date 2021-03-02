import axios from 'axios'
import  *  as types from './types'
export const fetchProducts = () => dispatch =>{
    axios.get("http://localhost:3000/itemsArray").then(res => {
            dispatch({
                type: types.FETCH_PRODUCTS,
                payload: res.data
            })
            
        })
}