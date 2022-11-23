import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

const NewSeller = () => {

    const [seller, setSeller] = useState('');
    const [pwd, setPwd] = useState('');
    const [confPwd, setConfPwd] = useState('');

    const handleSubmit = async (e) => {
        console.log('User registered')
        e.preventDefault();
         axios
         .post('http://localhost:5050/seller-signup', {
            seller: seller,
            password: pwd
         })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });

         e.target.reset();
    }

        return(
          <form onSubmit={handleSubmit}>
              <div>
                  <label for="username">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    placeholder="Username"
                    onChange={(e) => setSeller(e.target.value)}
                    value={seller}
                />
              </div>
              <div>
                  <label for="password">Password </label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                />
              </div>
              <div>
                  <label for="confirmPassword">Confirm Password </label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfPwd(e.target.value)}
                    value={confPwd}
                />
              </div>
              <div>
              <button type="submit">Start Selling!</button>
            </div>
          </form>
        )
}

export default NewSeller;