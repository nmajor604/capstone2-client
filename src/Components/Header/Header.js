import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            
              Connex&trade;
            
          </a>
            <div class="btn-container ml- ml-lg-4 d-flex justify-content-right">
            <Link>
            <a href='/login'>
                Login
              </a>
            </Link>
            <Link>
            <a href='/signup'>
                Sign Up
              </a>
            </Link>
              
            </div>
        </nav>
      </div>
      </header>
  )
  
}

export default Header;


    