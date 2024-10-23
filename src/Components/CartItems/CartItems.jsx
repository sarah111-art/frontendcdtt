import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove from '../images/icons/remove.png';
import './CartItems.css';
import { Link } from "react-router-dom";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState('');
    const [promoMessage, setPromoMessage] = useState('');
    const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
    const [discountedAmount, setDiscountedAmount] = useState(totalAmount);

    useEffect(() => {
        const amount = getTotalCartAmount();
        setTotalAmount(amount);
        localStorage.setItem("totalPrice", JSON.stringify(amount));
    }, [cartItems, getTotalCartAmount]);

    const handlePromoCodeSubmit = () => {
        const validPromoCodes = {
            "5%": 0.05,
            "10%": 0.10,
            "discount 10%": 0.10,
            "freeship": 0 // Free shipping logic can be added
        };

        if (validPromoCodes[promoCode]) {
            const discount = validPromoCodes[promoCode];
            const newTotal = totalAmount * (1 - discount);
            setDiscountedAmount(newTotal);
            setPromoMessage("Promo code applied successfully!");
            localStorage.setItem("discountedTotalPrice", JSON.stringify(newTotal)); // Save discounted total
        } else {
            setPromoMessage("Invalid promo code. Please try again.");
        }
    };

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
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img
                                    className="cartitems-product-icon"
                                    src={remove}
                                    onClick={() => removeFromCart(e.id)}
                                    alt=""
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <button>            <Link to={"/payment"} >payment</Link>
                            </button>
                            <hr />
                        </div>
                    );
                }
                return null; // Return null when the condition is not met
            })}
            
            <div className="cartitems-down">
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">
                        <input
                            type="text"
                            placeholder="promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button onClick={handlePromoCodeSubmit}>Submit</button>
                    </div>
                    {promoMessage && <p>{promoMessage}</p>} {/* Display the promo message */}
                </div>
                <div>
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    {discountedAmount < totalAmount && (
                        <p>Discounted Amount: ${discountedAmount.toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItems;
