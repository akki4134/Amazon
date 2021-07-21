import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart , removeFromCart } from '../Redux/Actions/cartAction';


import {
    // List,
    // ListItem,
    // ListItemText,
    // ListItemAvatar,
    makeStyles,
    Table,
    // TableHead,
    TableBody,
    TableRow,
    TableCell,
    Avatar,
   
} from '@material-ui/core';

import { FaTrash } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff',
        display: "flex",
        justifyContent: "center",
        padding: 20,
    },
    form: {
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: '0.5px solid',
        borderColor: '#767676;',
        borderRadius: '5px',
    },
    Avatar: {
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    },
    button: {
        margin: 5,
        textTransform: 'none',
        background: '#f0c14b',
        color: '#000',
        '&:hover': {
            background: '#f0c14b',
            border: '0.5px solid',
            borderColor: '#737373',
        }
    },

}))

function Cart(props) {

    const classes = useStyles();

    const productId = props.match.params.id

    const quantity = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const dispatch = useDispatch()

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
      }

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
                    {/* {cartItems.map((item) => (
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt={item.name} src={item.image} />
                                </ListItemAvatar>
                                <ListItemText> Product : {item.name} </ListItemText>
                                <ListItemText> price : {item.price} </ListItemText>
                                <ListItemText> Quantity : {item.quantity} </ListItemText>
                            </ListItem>
                        </List>
                    ))} */}
                    <Table aria-label="simple table">
                        {/* <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead> */}
                        <TableBody>
                            {cartItems.map((item) => (
                                <>
                                    <TableRow key={item.product}>
                                        <TableCell component="th" scope="row" > {item.name}</TableCell>
                                        <TableCell><Avatar className={classes.Avatar} alt={item.name} src={item.image} /></TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell><FaTrash  onClick={() => removeFromCartHandler(item.product)}  /></TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>



    )
}

export default Cart
