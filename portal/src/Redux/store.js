import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import { cartReducer } from '../Redux/Reducers/cartReducer';
// import {
//   orderCreateReducer,
//   orderDeleteReducer,
//   orderDeliverReducer,
//   orderDetailsReducer,
//   orderListReducer,
//   orderMineListReducer,
//   orderPayReducer,
//   orderSummaryReducer,
// } from './reducers/orderReducers';

import {
  //   productCategoryListReducer,
  //   productCreateReducer,
  //   productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  //   productReviewCreateReducer,
  //   productUpdateReducer,
} from '../Redux/Reducers/productReducer';


import {
  // userAddressMapReducer,
  // userDeleteReducer,
  // userDetailsReducer,
  // userListReducer,
  userRegisterReducer,
  userLoginReducer,
  // userTopSellerListReducer,
  // userUpdateProfileReducer,
  // userUpdateReducer,
} from '../Redux/Reducers/userReducer';

import {
  departmentListReducer
} from '../Redux/Reducers/departmentReducer'

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  }
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  departmentList: departmentListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  //   orderCreate: orderCreateReducer,
  //   orderDetails: orderDetailsReducer,
  //   orderPay: orderPayReducer,
  //   orderMineList: orderMineListReducer,
  //   userDetails: userDetailsReducer,
  //   userUpdateProfile: userUpdateProfileReducer,
  //   userUpdate: userUpdateReducer,
  //   productCreate: productCreateReducer,
  //   productUpdate: productUpdateReducer,
  //   productDelete: productDeleteReducer,
  //   orderList: orderListReducer,
  //   orderDelete: orderDeleteReducer,
  //   orderDeliver: orderDeliverReducer,
  //   userList: userListReducer,
  //   userDelete: userDeleteReducer,
  //   userTopSellersList: userTopSellerListReducer,
  //   productCategoryList: productCategoryListReducer,
  //   productReviewCreate: productReviewCreateReducer,
  //   userAddressMap: userAddressMapReducer,
  //   orderSummary: orderSummaryReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;