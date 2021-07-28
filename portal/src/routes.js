import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

import HomeScreen from './screens/HomeContent'

import ProductScreen from './screens/Products'
import ProductDetailsScreen from './screens/ProductDetails'

import CartScreen from './screens/Cart'
import ShippingScreen from './screens/Shipping'

import AdminHomeScreen from './Admin/screens/AdminHome'
import AdminReportsScreen from './Admin/screens/Reports'

import ErrorScreen from './screens/Error'

import { Route, Switch } from 'react-router-dom'


function routes() {

    return (
        <div>
            <Switch>

                <Route path='/' exact component={HomeScreen} />
                <Route path='/errors/page' exact component={ErrorScreen} />

                <Route path='/login' exact component={LoginScreen} />
                <Route path='/register' exact component={RegisterScreen} />

                <Route path='/products/' exact component={ProductScreen} />
                <Route path='/productdetails/id/:id' exact component={ProductDetailsScreen} />

                <Route path='/products/cart/:id?' exact component={CartScreen} />
                <Route path='/products/shipping' exact component={ShippingScreen} />

                <Route path='/adminHome' exact component={AdminHomeScreen} />
                <Route path='/adminReports' exact component={AdminReportsScreen} />

            </Switch>
        </div>
    )
}

export default routes


