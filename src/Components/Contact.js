import React from 'react';
// import { Link } from 'react-router-dom';


import '../css/style.css';
import '../css/responsive.css';
import '../css/bootstrap.css';

function Contact() {

    return (

        <section class="contact_section layout_padding">
            <div class="container">
            <h2 class="font-weight-bold">
                Contact Us
            </h2>
            <div class="row">
                <div class="col-md-8 mr-auto">
                <form action="">
                    <div class="contact_form-container">
                    <div>
                        <div>
                        <input 
                            type="text" 
                            placeholder="Name"
                        />
                        </div>
                        <div>
                        <input 
                            type="text" 
                            placeholder="Phone Number"
                        />
                        </div>
                        <div>
                        <input 
                            type="email" 
                            placeholder="Email"
                        />
                        </div>

                        <div class="mt-5">
                        <input 
                            type="text" 
                            placeholder="Message"
                        />
                        </div>
                        <div class="mt-5">
                        <button type="submit">
                            Send
                        </button>
                        </div>
                    </div>

                    </div>

                </form>
                </div>
            </div>
            </div>
        </section>

  )
  
}

export default Contact;
