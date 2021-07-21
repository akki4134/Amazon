
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"

import { useHistory } from 'react-router-dom';

//import { listDepartments } from "../Redux/Actions/departmentAction";
import { listProducts } from '../Redux/Actions/productAction'
import {
    Grid,
    Typography,
    makeStyles,
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
        margin:10,
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
        width: 200,
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


    useEffect(() => {
        dispatch(listProducts(props.location.state));
        return () => {
        };
    }, [dispatch, props.location.state]);

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
                            <Grid className={classes.form} item onClick={() => history.push('/productdetails/id/' + product._id)} key={product._id}>
                                <Grid container>
                                    <img height='200px' width='200px' src={product.image} alt={product.description} />
                                </Grid>
                                <Typography>  {product.name}</Typography>
                                <Typography>  {product.brand}</Typography>
                                <Typography>  Price : ₹ {product.price}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}

        </div>
    )
}

export default Products
