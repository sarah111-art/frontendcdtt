import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import './ProductDisplay.css';

const ProductDisplay = (props) => {

    const { product } = props;

    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState("");
    const [productid,setProductbyId]=useState("")
    const {productId}=useParams();



   

    return (
        <div className="productdisplay">
            <div className="div productdisplay-left">
                <div className="div productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="div productdisplay-right">
                <h1>{product.name}</h1>
                {/* Optional star ratings can go here */}
                <div className="div productdisplay-right-price">
                    <div className="div productdisplay-right-price-old">${product.old_price}</div>
                    <div className="div productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Dresses come in various styles, such as A-line, sheath, fit-and-flare, ball gown, wrap, and more. Each style has a unique silhouette and purpose, ranging from casual daywear to formal evening gowns.
                </div>
                <div className="div productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-size-options">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div 
                                key={size} 
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`} 
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={() => {
                        if (selectedSize) {
                            addToCart(product.id, selectedSize); // Pass selected size to addToCart
                        } else {
                            alert("Please select a size before adding to cart.");
                        }
                    }}
                    disabled={!selectedSize} // Disable if no size selected
                >
                    ADD TO CART
                </button>
                <p className="productdisplay-right-category"><span>Category :</span>Women, Dress, T-shirt</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
