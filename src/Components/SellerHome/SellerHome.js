import React from 'react';
import axios from "axios";

import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/bootstrap.css';

class SellerHome extends React.Component {
  state = {
      sellerListings: [],
  };

  componentDidMount() {
      axios.get('http://localhost:5050/listings').then((res) => {
          this.setState({ sellerListings: res.data });
          console.log(this.state.sellerListings)
      });

  }

  buyItem(id, item) {
    axios
      .patch(`http://localhost:5050/${id}`, { "is_sold": "1"})
      .then((res) => {
      const sellerListings = this.state.sellerListings.filter(item.id !== id);
      this.setState({ sellerListings });
      console.log(this.state.sellerListings)
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
                  {this.state.sellerListings.map((item) => (
                  <>
                    <div className="card">
                        <img
                        className="card-img-top"
                        src={item.image} 
                        alt="description"
                        
                         />
                      <div className="card-body">
                        <div key={item.id}>
                          <h5 className="card-title">{item.item_name}</h5>
                        </div>
                        <p className="card-text">{item.item_description}</p>
                        <div className="card-text">${item.price}</div>
                        <div className="card-text">{item.item_neighbourhood}</div>
                          <button onClick={(e) => this.buyItem(item.id, e)} className="btn btn-primary">
                            BUY THIS ITEM
                          </button>
                          <button onClick={(e) => this.deleteItem(item.id, e)} className="custom_orange-btn">
                            <p>DELETE THIS ITEM</p>
                          </button>
                      </div>
                    </div>
                  </>
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

export default SellerHome;
