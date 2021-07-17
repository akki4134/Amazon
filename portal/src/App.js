
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import ProductScreen from './screens/Products'
import ProductDetailsScreen from './screens/ProductDetails'
import RegisterScreen from './screens/Register'
import AdminHomeScreen from './Admin/screens/AdminHome'
import AdminReportsScreen from './Admin/screens/Reports'


import ErrorScreen from './screens/Error'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />

        <Route path='/error' component={ErrorScreen} />

        <Route path='/products/' component={ProductScreen} />
        <Route path='/productdetails/:id' component={ProductDetailsScreen} />

        <Route path='/adminHome' component={AdminHomeScreen} />
        <Route path='/adminReports' component={AdminReportsScreen} />
      </Switch>
    </Router>

  );

}

export default App;
