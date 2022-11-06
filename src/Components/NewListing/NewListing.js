import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function NewListing () {

    const [price, setPrice ] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
            axios
            .post('http://localhost:5050/listings', {
                price: e.target.price.value,
                item_name: e.target.item_name.value,
                item_title: e.target.item_title.value,
                item_description: e.target.item_description.value,
                is_firm: "0",
                item_neighbourhood: e.target.item_neighbourhood.value,
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
            <div className='signup__container'>
                    <form className="form__signup" onSubmit={handleSubmit}>
                    <div><h4>Start Selling!</h4></div>
                    <div><p>All fields are required, as well as at least one photo.</p></div>
                    <div>
                            <div>
                                <input
                                    placeholder='Name Whatever Price You Think Is Fair'
                                    name='price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <input
                                placeholder='What Are You Selling?'
                                name='item_name'
                                value={item_name}
                            />
                            </div>
                            <div>
                                <input
                                    placeholder='Write A Brief Headline'
                                    name='item_title'
                                    value={item_title}
                                />
                            </div>
                            
                            <div>
                                <input
                                    placeholder='Describe Your Item, Including the Condition'
                                    name='item_description'
                                    value={item_description}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder='List the Neighbourhood Your Selling In'
                                    name='item_neighbourhood'
                                    value={item_neighbourhood}
                                />
                            </div>
                            
                    
                    
                    
                    <button className='ui button primary'>
                        <p>Post Your Item</p>
                    </button>
                    
                    
                </form>               
                </div> 
            
        )
    
}

export default NewListing;