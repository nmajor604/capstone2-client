import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import ImageUpload from '../ImageUpload/ImageUpload';

function NewListing () {

    const [price, setPrice ] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemNeighbourhood, setItemNeighbourhood] = useState("");


    
    
    const handleSubmit = (e) => {
        e.preventDefault();
            axios
            .post('http://localhost:5050', {
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
                    <ImageUpload />        
                            
                    
                    
                    
                    <button className='ui button primary'>
                        <p>Post Your Item</p>
                    </button>
                    
                    
                </form>               
                </div> 
            
        )
    
}

export default NewListing;