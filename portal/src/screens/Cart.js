import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Actions/cartAction';


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
    Typography,
    Divider,
    Grid,
    Button,

} from '@material-ui/core';

import { FaTrash } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,
        height: '100%',
        width: '100%'
    },
    main: {
        background: '#fff',
        padding: 20,
        margin: 10,
        height: '100%',
        width: '100%'
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
        width: '100%',
        color: '#000',
        '&:hover': {
            background: '#f0c14b',
            border: '0.5px solid',
            borderColor: '#737373',
        }
    },
    delete: {
        fontSize: 20,
        color: '#ff8533',
        '&:hover': {
            color: '#ff3333'

        }
    },
    h2: {
        fontSize: 40,
        fontWeight: 800,

    },
    h3: {
        fontSize: 20,
        fontWeight: 800,
    }

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

                    <Grid container className={classes.root}>

                        <Grid className={classes.main} item xs={12} sm={12} md={8} lg={8}>
                            <Typography className={classes.h2}>Shopping Cart</Typography>
                            <Divider />

                            <Table aria-label="simple table">
                                <TableBody>
                                    {cartItems.map((item) => (
                                        <>
                                            <TableRow key={item.product} >
                                                <TableCell component="th" scope="row" >
                                                    <Link to={`/productdetails/id/${item.product}`} >
                                                        {item.name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link to={`/productdetails/id/${item.product}`} >
                                                        <Avatar className={classes.Avatar} alt={item.name} src={item.image} />
                                                    </Link>
                                                </TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell>{item.price}</TableCell>
                                                <TableCell>
                                                    <FaTrash className={classes.delete} onClick={() => removeFromCartHandler(item.product)} />
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid className={classes.main} item xs={12} sm={12} md={3} lg={3}>
                            <Typography className={classes.h3} >Subtotal ( {cartItems.length} items):8688.00</Typography>
                            <Button className={classes.button}>Proceed to Buy</Button>
                        </Grid>
                    </Grid>
                </div>
            )}
        </div>



    )
}

export default Cart
