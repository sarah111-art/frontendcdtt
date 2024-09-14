import React, { createContext, useEffect, useState } from "react";


export const ShopContext =createContext(null);
const getDefaultCart=()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++)
    {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const[all_product,setAll_Product]=useState([]);
    const[cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://backendcdtt.onrender.com/allproducts')
        .then((reponse)=>reponse.json())
        .then((data)=>setAll_Product(data))
    },[])
//addtocart

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://backendcdtt.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/from-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((reponse)=>reponse.json())
            .then((data)=>console.log(data));
        }
    }

//removecart   

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

//gettotalcartamount

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];

            }
            return totalAmount;
        }
    }

//gettotalcartitems
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue={getTotalCartItems,getTotalCartAmount ,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;