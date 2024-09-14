import React from "react";
import './Breadcrums.css'
import { CiLocationArrow1 } from "react-icons/ci";
const Breadcrums =(props)=>{
    const {product}=props;
    return(
        <div className="breadcrums">
                HOME <CiLocationArrow1 /> SHOP <CiLocationArrow1 />  {product.category} <CiLocationArrow1 /> {product.name}
        </div>
    )
}
export default Breadcrums