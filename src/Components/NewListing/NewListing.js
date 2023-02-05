import { useState } from 'react';
import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import '../../css/bootstrap.css';

import '../../css/style.css';
import '../../css/responsive.css';


function NewListing () {

    const [price, setPrice ] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemNeighbourhood, setItemNeighbourhood] = useState("");

    const [isFirm, setIsFirm] = useState("");

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");

    const uploadImage = (e) => {
        e.preventDefault();

        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "singapore")
        data.append("cloud_name", "dnceb1qqy")
        fetch("https://api.cloudinary.com/v1_1/dnceb1qqy/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        console.log('Form submitted')
        e.preventDefault();
            axios
            .post('http://localhost:5050/listings', {
                price: price,
                image: url,
                item_name: itemName,
                item_title: itemTitle,
                item_description: itemDescription,
                seller_id: "1",
                is_firm: isFirm,
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
                                            placeholder='Name Your Price'
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
                                            placeholder='Condition'
                                            name='item_description'
                                            value={itemDescription}
                                            onChange={(e) => setItemDescription(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            placeholder='Neighbourhood'
                                            name='item_neighbourhood'
                                            value={itemNeighbourhood}
                                            onChange={(e) => setItemNeighbourhood(e.target.value)}
                                        />
                                    </div>
                                    {/* <div>
                                        <input 
                                            type="radio"
                                            name='isFirm'
                                            id='flexible'
                                            value="0"
                                            checked={isFirm === "0"}
                                            onChange={(e) => setIsFirm(e.target.value)}
                                        />
                                        <label for="flexible">Price Flexible</label>
                                    
                                        <input 
                                            type="radio"
                                            name='isFirm'
                                            id='firm'
                                            value="1"
                                            checked={isFirm === "1"}
                                            onChange={(e) => setIsFirm(e.target.value)}
                                        />
                                        <label for="firm">Price Firm</label>
                                    </div> */}
                                    <div id="paymentContainer" name="paymentContainer" class="paymentOptions">

                                        <div id="payCC" class="floatBlock">
                                            <label for="paymentCC"> <input id="paymentCC" name="isFirm" type="radio" value="0" checked={isFirm === "0"} onChange={(e) => setIsFirm(e.target.value)}/>  Price Is Flexible  </label>
                                        </div>

                                        <div id="payInvoice" class="floatBlock">
                                            <label for="paymentInv"> <input id="paymentInv" name="isFirm" type="radio" value="1" checked={isFirm === "1"} onChange={(e) => setIsFirm(e.target.value)}/> Price Is Firm </label>
                                        </div>

                                    </div>
                                    {/* <div> */}
                                        <input 
                                            type="file" 
                                            onChange= {(e)=> setImage(e.target.files[0])}
                                            
                                        />
                                        <button type='button' onClick={uploadImage}>Upload Image</button>
                                        <img class="card-img-top" src={url} alt="description"/>
                                    {/* </div> */}
                                    <div className="mt-2">
                                        <button type="reset" classname="btn btn-secondary">
                                            RESET
                                        </button>
                                    </div>

                                    <div className="mt-2">
                                        <button type="submit" className='btn btn-secondary'>
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