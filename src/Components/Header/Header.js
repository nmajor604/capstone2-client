import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <div>
        <Link to="/"><h1>Connex&trade;</h1></Link>
      </div>
      <div>
        <div><Link to ="/seller-signup"><div>SIGN UP</div></Link></div>
        <div><Link to ="/login"><div>LOGIN</div></Link></div>
    </div>
    </header>
    
  )
  
}

export default Header;