
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"

import { Link , useHistory } from 'react-router-dom';

//import { listDepartments } from "../Redux/Actions/departmentAction";
import { listProducts } from '../Redux/Actions/productAction'

// import ProductDetails from './ProductDetails';

function Products(props) {
    const dispatch = useDispatch();

    const history = useHistory()

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;


    useEffect(() => {
        dispatch(listProducts(props.location.state));
        return () => {
            //
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
                    <Link to="/">Back to Home</Link>

                    {products.map((product) => (

                            <div onClick={()=> history.push('/productdetails/id/'  + product._id)} key={product._id}>
                                <div >
                                    {product.name}
                                </div>
                                <img height='100px' width='100px' src={product.image} alt={product.description} />
                                <div >
                                    {product.price}
                                </div>
                                <div >
                                    {product.brand}
                                </div>
                            </div>
                      
                    ))}
                </div>
            )}

        </div>
    )
}

export default Products
