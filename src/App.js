import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/NotFound/Notfound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/booking/:serviceID'>
              <Booking></Booking>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
