import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ImageUpload from './Components/ImageUpload/ImageUpload';

import Home from './Components/Home/Home';
import Listings from './Components/Listings/Listings';
import Login from './Components/Login/Login';
import NewListing from './Components/NewListing/NewListing';
import NewSeller from './Components/NewSeller/NewSeller';


export default class App extends Component {

   

  render() {
    return (
          <Router>
            {/* <Header /> */}
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/seller-signup' element={<NewSeller />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path="/listings" element={<Listings />} />
                <Route exact path="/add-item" element={<NewListing />} />
                <Route exact path='/imageupload' element={<ImageUpload />} />
              </Routes>
            {/* <Footer /> */}
          </Router>
      );
    
  }
}