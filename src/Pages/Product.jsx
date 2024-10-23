import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const [productbyID, setProductbyID] = useState(null); // Đặt giá trị mặc định là null

    useEffect(() => {
        const loadProductData = () => {
            let product = null;

            // Kiểm tra nếu all_product có giá trị
            if (Array.isArray(all_product) && all_product.length > 0) {
                product = all_product.find(e => e.id === Number(productId));
            } else {
                // Nếu không có, lấy từ localStorage
                const storedProducts = localStorage.getItem("productall");
                if (storedProducts) {
                    try {
                        const parsedProducts = JSON.parse(storedProducts);
                        product = Array.isArray(parsedProducts) ? parsedProducts.find(e => e.id === Number(productId)) : null;
                    } catch (error) {
                        console.error("Error parsing stored products:", error);
                    }
                }
            }

            setProductbyID(product); // Gán giá trị cho productbyID
        };

        loadProductData();
    }, [all_product, productId]);

    if (!productbyID) return <div>Loading...</div>; // Hiển thị loading nếu productbyID chưa có giá trị
  

    return (
        <div>
            <Breadcrums product={productbyID} />
            <ProductDisplay product={productbyID} />
            <DescriptionBox />
            <RelatedProducts product={productbyID} />
        </div>
    );
};

export default Product;
