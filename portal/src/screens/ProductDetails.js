import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react"


//import { listDepartments } from "../Redux/Actions/departmentAction";
import { detailsProduct } from '../Redux/Actions/productAction'
import {
    Grid,
    Typography,
    makeStyles,
    Button,
    // Select,
    // MenuItem,
    // FormControl,
    // InputLabel,
    TextField,
    Divider,
} from '@material-ui/core';

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
    console.log(props)

    const classes = useStyles();

    const dispatch = useDispatch();

    //  const history = useHistory()

    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const [quantity, setQuantity] = useState('1');
    console.log(product)
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [dispatch, props.match.params.id]);

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    <Grid container className={classes.root}>
                        <Grid item xs={12} sm={5} md={5} lg={5}>
                            <div>
                                <img height='500px' width='500px' src={product.image} alt="product"></img>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5}>
                            <Typography className={classes.h2}>{product.description}</Typography>
                            <Typography className={classes.h2}>{product.brand}</Typography>
                            <Divider />
                            <Typography className={classes.h3}>Price:₹ {product.price}</Typography>
                            <Typography className={classes.h3}>Inclusive of all taxes</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                            <Grid container className={classes.form} >
                                <TextField className={classes.textfeild} id="quantity" label="Quantity" value={quantity} size="small" variant="outlined" />
                                <Button className={classes.button} variant="contained"> Add to Cart</Button>
                                <Button className={classes.button} variant="contained"> Buy Now</Button>
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