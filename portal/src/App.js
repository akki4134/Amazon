
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './routes';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
