import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import ImageUpload from '../Components/ImageUpload/ImageUpload';
import Home from '../Components/Home/Home';
import Listings from '../Components/Listings/Listings';
import Login from '../Components/Login/Login';
import NewListing from '../Components/NewListing/NewListing';
import NewSeller from '../Components/NewSeller/NewSeller';
import SellerHome from '../Components/SellerHome/SellerHome';

// import RegLogin from '../Components/RegLogin/RegLogin';
import useToken from './useToken';

function App () {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
          <Router>
            {/* <Header /> */}
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/signup' element={<NewSeller />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path="/listings" element={<Listings />} />
                <Route exact path="/add-item" element={<NewListing />} />
                <Route exact path='/imageupload' element={<ImageUpload />} />
                <Route exact path='/sellerhome' element={<SellerHome />} />
                {/* <Route exact path='/sellers' element={<RegLogin />} /> */}
                
              </Routes>
            {/* <Footer /> */}
          </Router>
      );
    
  }

  export default App;
