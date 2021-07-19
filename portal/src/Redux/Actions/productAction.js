import axios from "axios";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../Constants/productConstant'

// export const listProducts = (
//     // category = '',
//     // searchKeyword = '',
//     // sortOrder = ''
// ) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST });
//         const { data } = await axios.get(
//             '/api/product/all'
//         );
//         dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//     }
// };

export const listProducts = (category) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST, payload: category });
        const { data } = await axios.get('/api/product/' + category);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
    }
};

export const detailsProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: id });
        const { data } = await axios.get('/api/product/details/' + id);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
    }
};
// export const Products = (
//     category = '',
// ) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST });

//         const { data } = await axios.get('/api/product/' + category);
//         dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

//     } catch (error) {
//         dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//     }
// };