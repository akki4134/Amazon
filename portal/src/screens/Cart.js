import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Actions/cartAction';


import {
    List,
    Avatar,
    ListItem,
    ListItemText,
    ListItemAvatar,

} from '@material-ui/core';

function Cart(props) {

    const productId = props.match.params.id

    const quantity = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    return (

        <div>
            {error ? (
                <div>{error}</div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt={item.name} src={item.image} />
                                </ListItemAvatar>
                                {/* <ListItemIcon> </ListItemIcon> */}
                                <ListItemText> Product : {item.name} </ListItemText>
                                <ListItemText> price : {item.price} </ListItemText>
                                <ListItemText> Quantity : {item.quantity} </ListItemText>
                            </ListItem>
                        </List>
                    ))}
                </div>
            )}
        </div>



    )
}

export default Cart
