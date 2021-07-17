
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"

//import { listDepartments } from "../Redux/Actions/departmentAction";
import { listProducts } from '../Redux/Actions/productAction'

function Products(props) {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    var category = props.location.state

    useEffect(() => {
        dispatch(listProducts(category));
        return () => {
            //
        };
    }, [category, dispatch]);

    console.log(props.location.state)
    console.log(products)

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>
                    {products.map((product) => (

                        <div key={product._id}>
                            <div >
                                {product.name}
                            </div>
                            <img height='100px' width='100px' src={product.image} alt={product.description}/>
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
