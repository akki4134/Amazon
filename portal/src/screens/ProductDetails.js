import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react"


//import { addToCart } from '../Redux/Actions/cartAction';

import { detailsProduct } from '../Redux/Actions/productAction'
import {
    Grid,
    Typography,
    makeStyles,
    Button,
    Select,
    // InputLabel,
    // TextField,
    Divider,
    // FormControl,
} from '@material-ui/core';

// import { useHistory } from "react-router-dom";

// import ProductDetails from './ProductDetails';

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
    image: {
        [theme.breakpoints.up('xs')]: {
            height: 150,
            width: 150,
        },
        [theme.breakpoints.up('sm')]: {
            height: 200,
            width: 200,
        },
        [theme.breakpoints.up('md')]: {
            height: 300,
            width: 300,
        },
        [theme.breakpoints.up('lg')]: {
            height: 500,
            width: 500,
        },
    },
    button: {
        margin: 5,
        width: '100%',
        textTransform: 'none',
        background: '#f0c14b',
        color: '#000',
        '&:hover': {
            background: '#f0c14b',
            border: '0.5px solid',
            borderColor: '#737373',
        }
    },
    textfeild: {
        fontSize: 10,
        width: 100,
    },
    h2: {
        margin: 5,
        fontSize: 15,
        fontWeight: 800,
    },
    h3: {
        margin: 5,
        fontSize: 15
    },
}))

function ProductDetails(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const [quantity, setQuantity] = useState('1')
    const countInStock = 10
    const productId = props.match.params.id

    useEffect(() => {
        dispatch(detailsProduct(productId));
        return () => {
            //
        };
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        //   dispatch(addToCart(productId, quantity))
        props.history.push(`/products/cart/${productId}?quantity=${quantity}`)
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }


    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <Grid container className={classes.root}>
                        <Grid item xs={5} sm={5} md={5} lg={5}>
                            <div>
                                <img className={classes.image} src={product.image} alt="product"></img>
                            </div>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5}>
                            <Typography className={classes.h2}>{product.description}</Typography>
                            <Typography className={classes.h2}>{product.brand}</Typography>
                            <Divider />
                            <Typography className={classes.h3}>Price:₹ {product.price}</Typography>
                            <Typography className={classes.h3}>Inclusive of all taxes</Typography>
                        </Grid>
                        <Grid item xs={5} sm={2} md={2} lg={2}>
                            <Grid container className={classes.form} >
                                {/* <TextField className={classes.textfeild} id="quantity" label="Quantity" value={quantity} size="small" variant="outlined" /> */}
                                {/* <FormControl variant="outlined">
                                    <InputLabel id="Quantity">Quantity</InputLabel> */}
                                <Select
                                    variant="outlined"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    id="Quantity"
                                    label="Quantity"
                                >
                                    {[...Array(countInStock).keys()].map(
                                        (x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {/* </FormControl> */}
                                <Button onClick={addToCartHandler} className={classes.button} variant="contained"> Add to Cart</Button>
                                <Button onClick={checkoutHandler} className={classes.button} variant="contained"> Buy Now</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
            }

        </div >
    )
}

export default ProductDetails