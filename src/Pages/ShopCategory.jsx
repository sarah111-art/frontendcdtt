import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [filteredItems, setFilteredItems] = useState([]);
    
    useEffect(() => {
        if (props?.category) {
            const filtered = all_product
                .filter(item => item?.category === props.category)
                .slice(0, 4); // Limit to 4 items
            setFilteredItems(filtered);
        }
    }, [all_product, props.category]);

    const handleShowMore = () => {
        const allFiltered = all_product.filter(item => item?.category === props.category);
        setFilteredItems(allFiltered);
    };

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing {filteredItems.length} out of {all_product.length} products</span>
                </p>
                <div className='shopcategory-sort'>
                    Sort by <IoIosArrowDropdown />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
            <div className="div shopcategory-loadmore" onClick={handleShowMore}>
                Explore More
            </div>
        </div>
    );
}

export default ShopCategory;
