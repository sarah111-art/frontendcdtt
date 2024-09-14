import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import './ProductDisplay.css'
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay =(props)=>{
    const {product}=props;
    const {addToCart} =useContext(ShopContext);
    return(
        
        <div className="productdisplay">
            <div className="div productdisplay-left">
                <div className="div productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="div productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="div productdisplay-right">
                <h1>{product.name}</h1>
                <div className="div productdisplay-right-stars">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <p>(122)</p>
                </div>
                <div className="div productdisplay-right-price">
                    <div className="div productdisplay-right-price-old">${product.old_price}</div>
                    <div className="div productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Dresses come in various styles, such as A-line, sheath, fit-and-flare, ball gown, wrap, and more. Each style has a unique silhouette and purpose, ranging from casual daywear to formal evening gowns.


                </div>
                <div className="div productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>

                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women ,Dress ,T-shirt</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern , Lastest</p>

            </div>
        </div>
    )
}
export default ProductDisplay