import axios from 'axios';
import { useState } from 'react';

const NewSeller = () => {

    const [seller, setSeller] = useState('');
    const [pwd, setPwd] = useState('');
    // const [confPwd, setConfPwd] = useState('');

    const handleSubmit = async (e) => {
        console.log('User registered')
        e.preventDefault();
         axios
         .post('http://localhost:5050/sellers', {
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
          <>
            <section className="contact_section layout_padding">
              <div className='container'>
                <h2 className="font-weight-bold">
                  Welcome To Connex! 
                </h2>
                <div className="row">
                <div className="col-md-8 mr-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="contact_form-container">
                      <div>
                        <div>
                          <input 
                            type="text" 
                            placeholder="Choose a Unique Username" 
                            value={seller}
                            onChange={e => setSeller(e.target.value)}
                          />
                        </div>
                        <div>
                          <input 
                            type="password" 
                            placeholder="Choose a Unique Password" 
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                          />
                        </div>
                        <div>
                          <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            // onChange={e => setConfPwd(e.target.value)}
                          />
                        </div>
                        <div className="mt-5">
                          <button type="submit">
                            START SELLING!
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

export default NewSeller;