import React from 'react';

const NewSeller = () => {
        return(
          <div>
              <div>
                  <label for="firstName">First Name </label>
                  <input type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div>
                  <label for="lastName">Last Name </label>
                  <input type="text" name="" id="lastName" placeholder="Last Name"/>
              </div>
              <div>
                  <label for="email">Email </label>
                  <input type="email" id="email" placeholder="Email"/>
              </div>
              <div>
                  <label for="password">Password </label>
                  <input type="password" id="password" placeholder="Password"/>
              </div>
              <div>
                  <label for="confirmPassword">Confirm Password </label>
                  <input type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              <div>
              <button type="submit">Start Selling!</button>
            </div>
          </div>
        )
}

export default NewSeller;