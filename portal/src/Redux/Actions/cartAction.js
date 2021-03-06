import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM

} from '../Constants/cartConstants'
import axios from 'axios'

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/product/details/${productId}`);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                // countInStock: data.countInStock,
                quantity
            }
        });
        const { cart: { cartItems } } = getState();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    } catch (error) {
        return error
    }
}

export const removeFromCart = (productId) => async (dispatch, getState) => {
    try {

        dispatch({ type: CART_REMOVE_ITEM, payload: productId });

        const { cart: { cartItems } } = getState();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));


    } catch (error) {
        return error
    }
}