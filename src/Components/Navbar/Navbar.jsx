import React, { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import logoweb from '../images/logoweb.png'
import cart01 from '../images/icons/cart01.png'
import './Navbar.css'
import { ShopContext } from "../../Context/ShopContext"
import { IoIosArrowDropdown } from "react-icons/io";
const Navbar =()=>{

    const[menu,setMenu]=useState("shop");

    const {getTotalCartItems}=useContext(ShopContext);

    const menuRef=useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
    <div className="navbar">
        <div className="nav-logo">
            <img  src={logoweb} alt=""/>
        </div>
        <IoIosArrowDropdown className="nav-dropdown" onClick={dropdown_toggle}/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration : 'none'}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration : 'none'}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration : 'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log out</button>
            :<Link to="/login"><button>Login</button></Link>}
         <Link to="/cart">   <img className="nav-cart-icon" src={cart01} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>);
}
export default Navbar 