import React from "react";

const ListingDetail = prop => {
    const { item } = item;
    return(
        /*
        Renders individual items into their own card component
        */
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
            {/* <button onClick={(e) => this.deleteItem(item.id, e)} className="custom_orange-btn">
                <p>DELETE THIS ITEM</p>
            </button> */}
        </div>
        </div>
    )
}

export default ListingDetail;