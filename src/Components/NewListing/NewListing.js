import { useState } from 'react';
import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';


function NewListing () {

    const [price, setPrice ] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemNeighbourhood, setItemNeighbourhood] = useState("");


    
    
    const handleSubmit = (e) => {
        console.log('Form submitted')
        e.preventDefault();
            axios
            .post('http://localhost:5050/', {
                price: price,
                item_name: itemName,
                item_title: itemTitle,
                item_description: itemDescription,
                is_firm: "0",
                item_neighbourhood: itemNeighbourhood,
                is_sold: "0"
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    
        e.target.reset();
        };
    

    
    
        return(
            <>
            <Header />
            <section className="contact_section layout_padding">
                <div className='container'>
                    <h2 className="font-weight-bold">
                        Start Selling!
                    </h2>
                    <h2 className="font-weight-bold">
                        All fields are required.
                    </h2>
                    <div clasName="row">
                        <div className="col-md-8 mr-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="contact_form-container">
                                        <div>
                                            <input
                                                placeholder='Name Whatever Price You Think Is Fair'
                                                name='price'
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                placeholder='What Are You Selling?'
                                                name='item_name'
                                                value={itemName}
                                                onChange={(e) => setItemName(e.target.value)}
                                            />
                                        </div>
                                    <div>
                                        <input
                                            placeholder='Write A Brief Headline'
                                            name='item_title'
                                            value={itemTitle}
                                            onChange={(e) => setItemTitle(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            placeholder='Describe Your Item, Including the Condition'
                                            name='item_description'
                                            value={itemDescription}
                                            onChange={(e) => setItemDescription(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            placeholder='List the Neighbourhood Your Selling In'
                                            name='item_neighbourhood'
                                            value={itemNeighbourhood}
                                            onChange={(e) => setItemNeighbourhood(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <button type="submit">
                                            POST ITEM
                                        </button>
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

export default NewListing;