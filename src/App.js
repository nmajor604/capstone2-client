import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


import Listings from './Components/Listings/Listings';
import NewListing from './Components/NewListing/NewListing';


export default class App extends Component {

   

  render() {
    return (
          <Router>
            {/* <Header /> */}
              <Routes>
                
                <Route exact path="/listings" element={<Listings />} />
                <Route exact path="/add-item" element={<NewListing />} />
                
              </Routes>
            {/* <Footer /> */}
          </Router>
      );
    
  }
}