import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';

function Header() {

  return (
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="" /><span>
              Connex
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact us</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <a href="">
                Login
              </a>
            </div>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <a href="">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
    </header>
  )
  
}

export default Header;


    