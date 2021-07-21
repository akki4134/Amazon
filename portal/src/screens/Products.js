
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"

import { useHistory } from 'react-router-dom';

//import { listDepartments } from "../Redux/Actions/departmentAction";
import { listProducts } from '../Redux/Actions/productAction'
//import { addToCart } from '../Redux/Actions/cartAction';

import {
    Grid,
    Typography,
    makeStyles,
  //  Button,
} from '@material-ui/core';


// import ProductDetails from './ProductDetails';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff',
        display: "flex",
        justifyContent: "flex-start",
        padding: 20,
    },
    form: {
        margin: 10,
        padding: 20,
        border: '0.5px solid',
        borderColor: '#767676;',
        borderRadius: '5px',
        '&:hover': {
            background: '#e6e6e6',
            border: '0.5px solid',
            borderColor: '#737373',
        }
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

function Products(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory()

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    // const [quantity, setQuantity] = useState('1')
    // const [productId, setProductId] = useState()

    // const countInStock = 10

    useEffect(() => {
        dispatch(listProducts(props.location.state));
        return () => {
        };
    }, [dispatch, props.location.state]);




    // const addToCartHandler = () => {
    
    //      dispatch(addToCart(productId, quantity))
    // }



    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <Grid className={classes.root} container>
                        {products.map((product) => (
                            <Grid className={classes.form} key={product._id}>

                                <Grid item onClick={() => history.push('/productdetails/id/' + product._id)}>
                                    <Grid container>
                                        <img height='200px' width='200px' src={product.image} alt={product.description} />
                                    </Grid>
                                    <Typography>  {product.name}</Typography>
                                    <Typography>  {product.brand}</Typography>
                                    <Typography>  Price : ₹ {product.price}</Typography>
                                </Grid>

                                {/* <select onChange={(e) => setQuantity(e.target.value)}>
                                    {[...Array(countInStock).keys()].map(
                                        (x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        )
                                    )}
                                </select>

                                <Button onClick={addToCartHandler} className={classes.button} variant="contained"> Add to Cart</Button> */}
                          
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}

        </div>
    )
}

export default Products