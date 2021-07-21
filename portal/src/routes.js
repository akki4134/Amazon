import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'

import HomeScreen from './screens/HomeContent'
import CartScreen from './screens/Cart'
import ProductScreen from './screens/Products'
import ProductDetailsScreen from './screens/ProductDetails'

import AdminHomeScreen from './Admin/screens/AdminHome'
import AdminReportsScreen from './Admin/screens/Reports'

import ErrorScreen from './screens/Error'

import { Route, Switch } from 'react-router-dom'


function routes() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={HomeScreen} />
                <Route path='/login' component={LoginScreen} />
                <Route path='/register' component={RegisterScreen} />

                <Route path='/error' component={ErrorScreen} />

                <Route path='/products/' component={ProductScreen} />
                <Route path='/productdetails/id/:id' component={ProductDetailsScreen} />

                <Route path='/cart/:id?' component={CartScreen}/>

                <Route path='/adminHome' component={AdminHomeScreen} />
                <Route path='/adminReports' component={AdminReportsScreen} />
            </Switch>
        </div>
    )
}

export default routes

