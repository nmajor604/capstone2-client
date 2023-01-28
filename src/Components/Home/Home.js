import React from 'react';

import hero from '../../images/garage_sale.jpg';
import { Link } from 'react-router-dom';

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';

function Home() {

  return (
    <>
      <section className=" slider_section position-relative">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
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
                          <div className="d-flex">
                            <Link to="/listings">
                              <button className="text-uppercase custom_orange-btn mr-3">
                                Buy Something!
                              </button>
                            </Link>
                            <Link to="/add-item">
                              <button className="text-uppercase custom_dark-btn">
                                Sell Something!
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <img src={hero} alt="Hero" className="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>

    <section class="service_section layout_padding ">
    <div class="container">
      <h2 class="custom_heading">The Connex Difference</h2>
      <p class="custom_heading-text">
        We're not your ordinary online classified site - we're the best of both worlds. 
        The annonymity of a free service like Craiglist coupled with the one-click ordering of 
        Amazon or Facebook.
      </p>
      <div class=" layout_padding2">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="images/card-item-1.png" alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Privacy</h5>
              <p class="card-text">
                We never collect or sell your data. Ever.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="images/card-item-2.png" alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Simplicity</h5>
              <p class="card-text">
                When you find an item you want to purchase, simply click on the button. No more endless
                email tag with the seller.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="images/card-item-3.png" alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Free</h5>
              <p class="card-text">
                We're 100% ad based. Pay your seller, never us.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <p class="custom_heading-text">
        Piqued your interest? Sign up today and join 1000s of others!
      </p>
      <div class="d-flex justify-content-center">
      <Link to="/contact">
        <button className="text-uppercase custom_dark-btn">
          Contact Us!
        </button>
      </Link>
      </div>
    </div>
  </section>


    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    </>
    
  )
  
  
}

export default Home;