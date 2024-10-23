import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    const cart = savedCart || {};
    
    // Initialize cart with keys from 0 to 300 if they don't exist
    for (let index = 0; index < 301; index++) {
        if (cart[index] === undefined) {
            cart[index] = 0; // Set to 0 if not present
        }
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://backendcdtt.onrender.com/allproducts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAllProducts(data);
                localStorage.setItem('productall', JSON.stringify(data));
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage whenever cartItems changes
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            return newCart;
        });

        if (localStorage.getItem('auth-token')) {
            fetch('https://backendcdtt.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log("Item added to cart:", data)) 
            .catch((error) => console.error("Add to cart error:", error));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) };
            return newCart;
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = allProducts.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    const contextValue = { 
        getTotalCartItems, 
        getTotalCartAmount,  
        all_product: allProducts, 
        cartItems, 
        addToCart, 
        removeFromCart 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
