import React from 'react';

import Header from '../Header/Header';
import hero from '../../images/garage_sale.jpg';
// import { Link } from 'react-router-dom';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';

function Home() {

  return (
    <>
      <Header />
      <section class=" slider_section position-relative">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Buy and Sell. <br />
                            With One Click.
                          </h1>
                          <p>
                            Cleaning out your closet? <br />
                            Filling up your closet? <br />
                            Tired of playing email tag with buyers or sellers? <br />
                            Let's talk. Actually, let's Connex.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
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
              </div>
            </div>
    </section>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    </>
    
  )
  
  
}

export default Home;