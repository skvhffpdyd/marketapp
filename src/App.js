import './css/App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from "./component/Login";
import Detail from './component/Detail';
import Payresult from './component/Payresult';
import CheckoutResult from './component/CheckoutResult';
import Logout from './component/Logout';
import History from './component/History';
import Search from './component/Search';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path="/*" element={<><Header /><Home /></>}>
          {/* <Route path="" element={<Home />} /> */}
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/history" element={<><Header /><History /></>}/>
        <Route path="/detail" element={<><Header/><Detail/></>}/>
        <Route path="/checkout" element={<><Header /><Checkout /></>}/>
        <Route path='/checkout/checkoutresult' element={<><Header/><CheckoutResult/></>}/>
        <Route path='/review/:id' element={<><Header/><Payresult/></>}/>
        <Route path='/search/:title' element={<><Header/><Search/></>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
