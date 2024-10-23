import React from "react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import ChatBot from "../chatbot/chatbot";
import logoweb from '../images/logoweb.png';
import './Footer.css';
const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logoweb} alt="" />
               

                </div>
                <ul className="footer-links">
                <li>Company</li> 
                <li>Product</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            {<IoLogoInstagram />} 
        </div>
        <div className="footer-icons-container">
           {<FaPinterest/>} 
        </div>
        <div className="footer-icons-container">
           {<FaWhatsapp />} 
        </div>

        </div>
<div className="footer-copyright">
    <hr/>
    <p>Copyright @2024 - All Right Resered. </p>
</div>
<ChatBot />
        </div>
        
    )
}
export default Footer