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
export const filterProducts = (products, tags) => dispatch =>{
    dispatch({
        type: types.FILTER_PRODUCTS,
        payload: {
            items: tags.length===0? products:
            products.filter(product => {
                
                for(const tag of tags){
                    if (product.tags.indexOf(tag)>=0)
                        return product
                }
                
            })
            
        }
    })
}
export const sortProducts = (filtredProducts, by, order) => dispatch =>{
    const sortedProducts = filtredProducts.slice()
    if (sortedProducts.length > 0){
        sortedProducts.sort((a, b) => (a[by] > b[by] ? -1 * order : 1 * order));
    }
    dispatch({
        type: types.SORT_PRODUCTS,
        payload:{
            items : sortedProducts
        }
    })
}
export const updateUserNavbar = (name, role) => dispatch => {
    dispatch({
        type: types.UPDATE_USER_NAVBAR,
        payload: {
            name, role
        }
    })
}