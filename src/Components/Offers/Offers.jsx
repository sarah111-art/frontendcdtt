import React from "react";
import './Offers.css'
import model01 from '../images/items/model01.png'
const Offers=()=>{
    return(
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={model01} alt="" />
        </div>
    </div>)
}
export default Offers