import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css';
import remove from '../images/icons/remove.png';

const CartItems = () => {
    const {getTotalCartAmount , all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="div cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                className="cartitems-product-icon"
                                    src={remove}
                                    onClick={() => removeFromCart(e.id)}
                                    alt=""
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // Return null when the condition is not met
            })}
            <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount ()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>  
                <hr/>
                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>${getTotalCartAmount ()}</p>
                </div>
                <button>PROCEED TO CHECKOUT</button>

            </div>
            <div className="cartitems-promocode">
            <p>If u have a  promo code ,Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promote code "/>
                <button>Submit</button>
            </div>
        </div>
        </div>
    
        </div>
    );
};

export default CartItems;
