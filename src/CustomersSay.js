import React from 'react';
import user1 from './Images/user1.jpg';
import user2 from './Images/user2.jpg';
import user3 from './Images/user3.jpg';
import user4 from './Images/user4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CustomersSay() {
    return (
        <section className="testimonials-section" style={{ backgroundColor: '#D9D9D9' }}>
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonial-grid">
                <div className="testimonial">
                    <img src={user1} alt="Testimonial 1" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>John Doe</h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="testimonial">
                    <img src={user2} alt="Testimonial 1" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>John Doe</h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="testimonial">
                    <img src={user3} alt="Testimonial 1" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>John Doe</h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="testimonial">
                    <img src={user4} alt="Testimonial 1" className="testimonial-image" />
                    <div className="testimonial-details">
                        <h3>John Doe</h3>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </div>
                        <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;