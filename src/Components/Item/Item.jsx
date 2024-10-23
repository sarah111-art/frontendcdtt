import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = (props) => {
    // Tính toán giá giảm và tỷ lệ giảm giá
    const oldPrice = parseFloat(props.old_price);
    const newPrice = parseFloat(props.new_price);
    const discountPercentage = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : 0;

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${newPrice.toFixed(2)}
                </div>
                {oldPrice > newPrice && (
                    <div className="item-price-old">
                        ${oldPrice.toFixed(2)}
                    </div>
                )}
                {discountPercentage > 0 && (
                    <div className="discount-badge">
                        {discountPercentage}% Giảm Giá
                    </div>
                )}
            </div>
        </div>
    );
}

export default Item;
