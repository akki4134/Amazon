import {
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"

//import { listDepartments } from "../Redux/Actions/departmentAction";
import { listProducts } from '../Redux/Actions/productAction'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

function HomeGrid(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    // const [category, setcategory] = useState('');

    // const [loading, setloading] = useState(false);
    // const [departments, setdepartments] = useState([]);


    // const departmentList = useSelector((state) => state.departmentList);
    // const { departments, loading, error } = departmentList;



    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;


    useEffect(() => {
        dispatch(listProducts());

        return () => {
            //
        };
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <Grid container>
                {loading ? (
                    <div>loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Typography>  Styles for Men | Up to 70% off </Typography>
                            <Grid container nowrap="true">
                                {products.map((product) => (
                                    <Grid className={classes.items}
                                        item key={product._id}>
                                        {product.name}
                                    </Grid>
                                ))}


                            </Grid>
                            <Grid container nowrap="true">
                                <Grid item >
                                    25
                                </Grid>
                                <Grid item >
                                    24
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Grid container nowrap="true">
                                <Grid item >
                                    21
                                </Grid>
                                <Grid item >
                                    22
                                </Grid>
                            </Grid>
                            <Grid container nowrap="true">
                                <Grid item >
                                    23
                                </Grid>
                                <Grid item >
                                    24
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Grid container nowrap="true">
                                <Grid item >
                                    21
                                </Grid>
                                <Grid item >
                                    22
                                </Grid>
                            </Grid>
                            <Grid container nowrap="true">
                                <Grid item >
                                    23
                                </Grid>
                                <Grid item >
                                    24
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Grid container nowrap="true">
                                <Grid item >
                                    21
                                </Grid>
                                <Grid item >
                                    22
                                </Grid>
                            </Grid>
                            <Grid container nowrap="true">
                                <Grid item >
                                    23
                                </Grid>
                                <Grid item >
                                    24
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
    )
}

export default HomeGrid
