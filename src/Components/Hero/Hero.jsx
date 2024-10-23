import React from "react"
import model2 from '../images/model2.png'
import hand from '../images/hand.png'
import './Hero.css'
const Hero =()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>New arrivals only</h2>
                <div>
            <div className="hero-hand-icon">
                <p>new</p>
               <img src={hand} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>lastest collection</div>
                <img src="" alt="" />
            </div>
             </div>
              <div className="hero-right">
            <img src={model2} alt="" />
            </div>
        </div>
    );
}

export default Hero