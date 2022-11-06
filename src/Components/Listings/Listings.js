import React from "react";
// import { Link } from 'react-router-dom';
// import './Listings.css';
import axios from "axios";

class Listings extends React.Component {
    state = {
        currentListings: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5050/').then((res) => {
            this.setState({ currentListings: res.data });
            console.log(this.state.currentListings)
        });
    }

    render(){
        return(

            
          
            <div className="listing__container">
                {this.state.currentListings.map((item) => (
                <>
                  <div className="listing__card">
                    
                      <img className="listing__image"
                      src={item.image} 
                      alt="description"
                      width="100px" />
                    
                    <div className="listing__description">
                      <div key={item.id}>
                        <h1>{item.item_name}</h1>
                      </div>
                      <div>{item.item_description}</div>
                      <div>${item.price}</div>
                      <div>{item.item_neighbourhood}</div>
                      
                        <p>BUY THIS ITEM</p>
                     
                    </div>
                  </div>
                  
                </>
              ))}
            </div>
          
            
            
                    
                
            
        )
    }
}

export default Listings;