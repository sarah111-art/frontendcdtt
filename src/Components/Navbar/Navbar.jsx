// import React, { useContext, useRef, useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom"; // Ensure you are using useNavigate
// import { ShopContext } from "../../Context/ShopContext";
// import cart01 from '../images/icons/cart01.png';
// import logoweb from '../images/logoweb.png';
// import './Navbar.css';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const [searchTerm, setSearchTerm] = useState("");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();
//     const navigate = useNavigate(); // Use useNavigate

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     }

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchTerm) {
//             navigate(`/search?query=${searchTerm}`); // Use navigate for routing
//             setSearchTerm(""); // Clear the input after searching
//         }
//     }

//     const menuItems = [
//         { name: "Shop", path: "/" },
//         { name: "Men", path: "/mens" },
//         { name: "Women", path: "/womens" },
//         { name: "Kids", path: "/kids" }
//     ];

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <Link to={"/"}><img src={logoweb} alt="Logo" /></Link>
//             </div>
//             <IoIosArrowDropdown 
//                 className="nav-dropdown" 
//                 onClick={dropdown_toggle} 
//                 aria-expanded={menuRef.current?.classList.contains('nav-menu-visible')}
//             />
//             <ul ref={menuRef} className="nav-menu">
//                 {menuItems.map(item => (
//                     <li key={item.name} onClick={() => setMenu(item.name.toLowerCase())}>
//                         <Link style={{ textDecoration: 'none' }} to={item.path}>
//                             {item.name}
//                         </Link>
//                         {menu === item.name.toLowerCase() ? <hr /> : null}
//                     </li>
//                 ))}
//             </ul>
//             <form className="nav-search" onSubmit={handleSearch}>
//                 <input 
//                     type="text" 
//                     value={searchTerm} 
//                     onChange={(e) => setSearchTerm(e.target.value)} 
//                     placeholder="Search..." 
//                     aria-label="Search"
//                 />
//                 <button type="submit">Search</button>
//             </form>
//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token') ? (
//                     <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>
//                         Log out
//                     </button>
//                 ) : (
//                     <Link to="/login"><button>Login</button></Link>
//                 )}
//                 <Link to="/cart">
//                     <img className="nav-cart-icon" src={cart01} alt="Cart" />
//                 </Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//             </div>
//         </div>
//     );
// }
//  export default Navbar;


// import React, { useContext, useRef, useState } from "react"
// import { IoIosArrowDropdown } from "react-icons/io"
// import { Link } from "react-router-dom"
// import { ShopContext } from "../../Context/ShopContext"
// import cart01 from '../images/icons/cart01.png'
// import logoweb from '../images/logoweb.png'
// import './Navbar.css'
// const Navbar =()=>{

//     const[menu,setMenu]=useState("shop");

//     const {getTotalCartItems}=useContext(ShopContext);

//     const menuRef=useRef();

//     const dropdown_toggle = (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     }
//     return(
//     <div className="navbar">
//         <div className="nav-logo">
//            <Link to={"/"}> <img  src={logoweb} alt=""/></Link>
//         </div>
//         <IoIosArrowDropdown className="nav-dropdown" onClick={dropdown_toggle}/>
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration : 'none'}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration : 'none'}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration : 'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//             </ul>
//         <div className="nav-login-cart">
//             {localStorage.getItem('auth-token')
//             ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log out</button>
//             :<Link to="/login"><button>Login</button></Link>}
//          <Link to="/cart">   <img className="nav-cart-icon" src={cart01} alt="" /></Link>
//             <div className="nav-cart-count">{getTotalCartItems()}</div>
//         </div>
//     </div>);
// }
// export default Navbar 
import React, { useContext, useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cart01 from '../images/icons/cart01.png';
import logoweb from '../images/logoweb.png';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [searchTerm, setSearchTerm] = useState("");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const navigate = useNavigate();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search?query=${searchTerm}`);
            setSearchTerm(""); // Clear the input field after search
        }
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const menuItems = [
        { name: "Shop", path: "/" },
        { name: "Men", path: "/mens" },
        { name: "Women", path: "/womens" },
        { name: "Kids", path: "/kids" },
        {name : "Contact",path:"/contact"},
        { name : "Blog",path:"/blog"}
    ];

    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to={"/"}><img src={logoweb} alt="Logo" /></Link>
            </div>
            <IoIosArrowDropdown 
                className="nav-dropdown" 
                onClick={dropdown_toggle} 
                aria-haspopup="true"
                aria-expanded={menuRef.current?.classList.contains('nav-menu-visible')}
            />
            <ul ref={menuRef} className="nav-menu">
                {menuItems.map(item => (
                    <li key={item.name} onClick={() => setMenu(item.name.toLowerCase())}>
                        <Link style={{ textDecoration: 'none' }} to={item.path}>
                            {item.name}
                        </Link>
                        {menu === item.name.toLowerCase() ? <hr /> : null}
                    </li>
                ))}
            </ul>
            <form className="nav-search" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    placeholder="Search..." 
                    aria-label="Search"
                />
                <button type="submit">Search</button>
            </form>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>
                        Log out
                    </button>
                ) : (
                    <Link to="/login"><button>Login</button></Link>
                )}
                <Link to="/cart">
                    <img className="nav-cart-icon" src={cart01} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
