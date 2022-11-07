import React from "react";
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

    buyItem(id, item) {
      axios.patch(`http://localhost:5050/${id}`).then((res) => {
        const currentListings = this.state.currentListings.filter(item.id !== id);
        this.setState({ currentListings });
      })
    }

    
    render(){
        return(

            <div>
                {this.state.currentListings.map((item) => (
                <>
                  <div>
                      <img
                      src={item.image} 
                      alt="description"
                      width="100px" />
                    
                    <div>
                      <div key={item.id}>
                        <h1>{item.item_name}</h1>
                      </div>
                      <div>{item.item_description}</div>
                      <div>${item.price}</div>
                      <div>{item.item_neighbourhood}</div>
                        <button onClick={(e) => this.buyItem(item.id, e)}>
                          <p>BUY THIS ITEM</p>
                        </button>
                        
                     
                    </div>
                  </div>
                  
                </>
              ))}
            </div>
        )
    }
}

export default Listings;