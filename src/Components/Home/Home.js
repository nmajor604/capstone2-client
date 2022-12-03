import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
// import './Responsive.css';

import hero from '../../assets/sydmead.jpg';

function Home() {

  return (
    <>
      <body>
        <div class="hero__container">
          <div class="slider_item-detail">
            <div>
              <h1>
                Buy and Sell. <br />
                With Just One Click.
              </h1>
              <p>
                Cleaning out your closet?<br />
                Filling up your closet? <br />
                Tired of playing endless email tag? 
                <br />
                Let's
                <br />
                <span class="navbar-brand">
                    Connex!
                </span>
              </p>
              <div class="btn__container">
                <a href="/listings" class="shop-btn">
                  Buy Something!
                </a>
                <a href="/add-item" class="sell-btn">
                  Sell Something!
                </a>
              </div>
            </div>
          </div>
          <div class="slider_img-box">
            <div>
              <img src={hero} alt="" class="" />
            </div>
          </div>
        </div>
      </body>
    </>
    
  )
  
  
}

export default Home;