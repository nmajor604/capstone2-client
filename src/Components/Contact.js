import React, { useState } from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


import '../css/style.css';
import '../css/responsive.css';
import '../css/bootstrap.css';

function Contact() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        console.log('User registered')
        e.preventDefault();
         axios
         .post('http://localhost:5050/comments', {
            name: name,
            phone: phone,
            email: email,
            message: message
         })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });

         e.target.reset();
    }

    return (

        <section class="contact_section layout_padding">
            <div class="container">
            <h2 class="font-weight-bold">
                Contact Us
            </h2>
            <div class="row">
                <div class="col-md-8 mr-auto">
                <form onSubmit={handleSubmit}>
                    <div class="contact_form-container">
                    <div>
                        <div>
                        <input 
                            type="text" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                        </div>
                        <div>
                        <input 
                            type="text" 
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}

                        />
                        </div>
                        <div>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        </div>

                        <div class="mt-5">
                        <input 
                            type="text" 
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}

                        />
                        </div>
                        <div class="mt-5">
                        <Button className="primary" onClick={handleShow}>
                            Send
                        </Button>
                        </div>
                    </div>

                    </div>

                </form>
                </div>
            </div>
            </div>

            <>
                /**
                Small modal window that pops up once user has submitted the comments form
                 */
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                    <Modal.Title>Thanks for your feedback!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Our goal is to respond within 48 hours.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        </section>

  )
  
}

export default Contact;
