import { useSelector } from 'react-redux';

import Checkout from "../components/Checkout";

function Shipping(props) {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const cart = useSelector((state) => state.cart);
    // const { shippingAddress } = cart;
    // const [lat, setLat] = useState(shippingAddress.lat);
    // const [lng, setLng] = useState(shippingAddress.lng);
    // const userAddressMap = useSelector((state) => state.userAddressMap);
    // const { address: addressMap } = userAddressMap;



    return (
        <div>
            <Checkout step1 step2></Checkout>
            shipping
        </div>
    )
}

export default Shipping