import React from 'react'
import offer1 from "../assets/offer1.jpeg"
import offer2 from "../assets/offer2.jpeg"
import offer3 from "../assets/offer3.jpeg"
import offer4 from "../assets/offer4.jpeg"

const Offers = (props) => {
  return (
    <section className="offers">
    <div className="container">
      {props.offers.map((offer, index)=>(
        <img key={index} className="offer" src={offer} />
      ))}
    </div>
</section>
  )
}

export default Offers