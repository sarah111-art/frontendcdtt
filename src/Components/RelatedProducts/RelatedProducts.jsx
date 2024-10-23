import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";
import './RelatedProducts.css';
const RelatedProducts=(props)=>{
    const {product}=props
  
    const{all_product}=useContext(ShopContext);
    const [filteredItems,setFilteredItems]=useState([])
    useEffect(()=>{ 
        const filtered = all_product .filter(item => item.category === product.category).slice(0, 4); // Limit the result to 4 items
      
      setFilteredItems(filtered);} // Limit the result to 4 items
       ,[all_product])
    return(<div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="div relatedproducts-item">
            {filteredItems.map((item,i)=>{
                return <Item key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                 />
            })}
            </div>
    </div>)
}
export default RelatedProducts