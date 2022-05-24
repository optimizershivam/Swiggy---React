import React from 'react'

const Restaurants = (props) => {
  return (
    <div className="container divider">
            <div className="cards">
                    {props.restaurants.map(restaurant => (
                         <div className="card" key={restaurant.id}>
                         <img width="254" height="160px" src={restaurant.image} />
                         <div className="restaurant-details">
                             <div className="restaurant-title">{restaurant.name}</div>
                             <div className="restaurant-subtitle">{restaurant.category.join(", ")}</div>
                         </div>
                         <div className="restaurant-info">
                             <div className="restaurant-ratings">
                                 <i className="material-icons star-icon">star</i>{restaurant.rating}
                             </div>
                              .<div className="restaurant-delivery-timings">{`${restaurant.deliveryTimings} MINS`}</div> .
                             <div className="restaurant-cost-for-two">{`₹${restaurant.costForTwo} FOR TWO`}</div>
                         </div>
                         <div className="offer-banner">
                             <span className="material-icons"> local_offer </span>
                             <span className="offer-text">{restaurant.offer.join(" | ")}</span>
                         </div>
                     </div>
                    ))}
            </div>
        </div>
  )
}

export default Restaurants