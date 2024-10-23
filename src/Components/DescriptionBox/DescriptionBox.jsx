import React, { useState } from "react";
import './DescriptionBox.css';
import { CiStar } from "react-icons/ci"; // Make sure to install react-icons if not already

const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview && rating) {
            setReviews([...reviews, { review: newReview, rating }]);
            setNewReview("");
            setRating(0);
        }
    };

    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </div>
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </div>      
            </div>
            <div className="descriptionbox-content">
                {activeTab === 'description' ? (
                    <div className="descriptionbox-description">
                        <p>Trendy & Timeless Fashion. Explore our diverse collection of clothing, where fashion meets affordability. Whether you’re looking for the latest trends or timeless classics, we’ve got something for every style and occasion. From chic dresses and stylish separates to cozy outerwear and statement accessories, our sale features high-quality pieces at irresistible prices.</p>
                    </div>
                ) : (
                    <div className="descriptionbox-reviews">
                        <h3>Customer Reviews</h3>
                        {reviews.length > 0 ? (
                            <ul>
                                {reviews.map((review, index) => (
                                    <li key={index}>
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <CiStar key={i} className="star" />
                                        ))}
                                        <span>{review.review}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No reviews yet. Be the first to write one!</p>
                        )}
                        <form onSubmit={handleReviewSubmit}>
                            <div className="star-rating">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <CiStar 
                                        key={i}
                                        className={`star ${i < rating ? 'filled' : ''}`}
                                        onClick={() => setRating(i + 1)}
                                    />
                                ))}
                            </div>
                            <textarea 
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review here..."
                                required
                            />
                            <button type="submit">Submit Review</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DescriptionBox;
