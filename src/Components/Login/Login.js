import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';

async function loginUser(credentials) {
  return fetch('http://localhost:5050/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [seller, setSeller] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      seller,
      password
    });
    setToken(token);
  }

  return(
    <>
    <section className="contact_section layout_padding">
      <div className='container'>
        <h2 className="font-weight-bold">
          Welcome Back! 
        </h2>
        <div className="row">
        <div className="col-md-8 mr-auto">
          <form onSubmit={handleSubmit}>
            <div className="contact_form-container">
              <div>
                <div>
                  <input type="text" placeholder="Username" onChange={e => setSeller(e.target.value)}/>
                </div>
                <div>
                  <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mt-5">
                  <button type="submit">
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};