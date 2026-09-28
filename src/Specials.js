import React from 'react';
import dish1 from './Images/dish1.jpg';
import dish2 from './Images/dish2.svg';
import dish3 from './Images/dish3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

function Specials() {
    return (
        <section>
            <div className="highlights-section">
                <div className="highlights-content">
                    <h2>This week's specials</h2>
                    <button className="order-menu-button">Order Menu</button>
                </div>
            </div>
            <div className="dishes-section">
                <div className="dish-card">
                    <img src={dish1} alt="Dish 1" className="dish-image" />
                    <div className="dish-details">
                        <h3>Greek Salad</h3>
                        <p className="dish-price">$10.99</p>
                    </div>
                    <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish2} alt="Dish 2" className="dish-image" />
                    <div className="dish-details">
                        <h3>Bruchetta</h3>
                        <p className="dish-price">$12.99</p>
                    </div>
                    <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish3} alt="Dish 3" className="dish-image" />
                    <div className="dish-details">
                        <h3>Lemon Dessert</h3>
                        <p className="dish-price">$8.99</p>
                    </div>
                    <p className="dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>
            </div>
        </section>
    );
}

export default Specials;