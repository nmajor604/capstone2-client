import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import hero from '../../assets/sydmead.jpg';

function Home() {

  return (
    <>
      <div class="hero_area">
    
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            
              Connex&trade;
            
          </a>
            <div class="btn-container ml- ml-lg-4 d-flex justify-content-right">
              <a>
                Login
              </a>
              <a>
                Sign Up
              </a>
            </div>
        </nav>
      </div>
    </header>
    
    <section class="slider_section position-relative">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="slider_item-detail">
                <div>
                  <h1>
                    Buy and Sell. <br />
                    With Just One Click.
                  </h1>
                  <p>
                    Cleaning out your closet? Filling up your closet? 
                    Tired of playing endless email tag with buyers and seller? <br />
                    Let's
                    <span class="navbar-brand">
                      Connex!
                    </span>
                    
                  </p>
                  <div class="d-flex">
                    <a href="" class="text-uppercase shop-btn mr-2">
                      Buy Something!
                    </a>
                    <a href="" class="text-uppercase custom_dark-btn">
                      Sell Something!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="slider_img-box">
                <div>
                  <img src={hero} alt="" class="" />
                </div>
              </div>
            </div>
            </div>
        </div>
    </section>

    
  </div>
  
  <section class="container-fluid footer_section">
    <p>
      Copyright &copy; 2019 All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
  
    </>
    
  )
  
  
}

export default Home;