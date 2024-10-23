import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'; // Adjust this path
import './CSS/SearchResults.css';
const SearchResults = () => {
    const [results, setResults] = useState([]);
    const query = new URLSearchParams(useLocation().search).get('query');
    const { all_product } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState("");
    const { addToCart } = useContext(ShopContext);
    useEffect(() => {
        if (query) {
            const filteredResults = all_product?.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        }
    }, [query, all_product]);
    console.log(all_product)
    return (
        <div className='search'>
            <h1 className='search-div'>Search Results for "{query}"</h1>
            {results.length > 0 ? (
                results.map(product => (
                   
                    <div key={product.id} className='search-product'>
                         <Link to={`/product/${product.id}`}>
                    <img className='search-img' onClick={() => window.scrollTo(0, 0)} src={product.image} alt={product.name} />
                </Link>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.new_price}</p>
                        <div className="div productdisplay-right-size-s">
                    <h1>Select Size</h1>
                    <div className="search-product-size-options">
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
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
