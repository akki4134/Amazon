
import HomeScreen from './screens/Home'
import AdminScreen from './Admin/screens/Login'
import AdminHomeScreen from './Admin/screens/AdminHome'
import AdminReportsScreen from './Admin/screens/Reports'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/admin' component={AdminScreen} />
        <Route path='/adminHome' exact component={AdminHomeScreen} />
        <Route path='/adminReports' exact component={AdminReportsScreen} />         
      </Switch>
    </Router>

  );

}

export default App;
