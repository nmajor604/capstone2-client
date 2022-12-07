import React from 'react';
import './Home.css';

import Header from '../Header/Header';
import hero from '../../assets/sydmead.jpg';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <Header />
      <body>
        <div class="hero__container">
          <div class="slider_item-detail">
              <h1>
                Buy and Sell. <br />
                With Just One Click.
              </h1>
              <p>
                Cleaning out your closet?<br />
                Filling up your closet? <br />
                Tired of playing endless email tag? 
                <br />
                Let's...
                <br />
                <span class="navbar-brand">
                    Connex!
                </span>
              </p>
              <div class="btn__container">
                <Link to='/listings' class="shop-btn">
                    Buy Something!
                </Link>
                <Link to='/add-item' class="sell-btn">
                    Sell Something!
                </Link>
              </div>

          </div>
          <div class="slider_img-box">
              <img src={hero} alt="" class="" />
          </div>
        </div>
      </body>
    </>
    
  )
  
  
}

export default Home;