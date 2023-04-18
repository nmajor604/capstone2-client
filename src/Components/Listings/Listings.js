import React from "react";
import axios from "axios";

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';
import ListingDetail from "../ListingDetail/ListingDetail";

class Listings extends React.Component {
    state = {
        currentListings: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5050/listings').then((res) => {
            this.setState({ currentListings: res.data });
            console.log(this.state.currentListings)
        });
 
    }

    /*
    Function that changes is_sold status of item to 'true'
    */
    buyItem(id, item) {
      axios
        .patch(`http://localhost:5050/${id}`, { "is_sold": "1"})
        .then((res) => {
        const currentListings = this.state.currentListings.filter(item.id !== id);
        this.setState({ currentListings });
        console.log(this.state.currentListings)
        console.log('Item Sold!');
      });
    }

    deleteItem(id) {
      axios.delete(`http://localhost:5050/listings/${id}`)
        .then((res) => {
          console.log("Item Deleted")
        })
    }

    
    render(){
        return(
          <>
            <section className="service_section layout_padding ">
              <div className="container">
                <h2 className="custom_heading">Listings</h2>
                <p className="custom_heading-text">
                  Once you find something you want, just click 'Buy Now' to send a purchase request directly to the seller. No need to exchange endless emails ever again! 
                </p>
                <div className="layout_padding2">
                <div className="card-deck">
                    {this.state.currentListings.map((item, index) => (
                      <ListingDetail
                      item = {item}
                      key={index}

                      
                    />
                    
                  ))}
                  
                  </div>
              </div>
              </div>

            </section>
            <div className="d-flex justify-content-center">
        <a href="/listings" className="custom_dark-btn">
          Show More
        </a>
      </div>
          </>
        )
    }
}

export default Listings;