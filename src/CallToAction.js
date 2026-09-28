import React from 'react';
import image from './Images/restauranfood.jpg';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
        <section className="hero-section">
            <div className="text-content">
                <div className="title">Little Lemon</div>
                <div className="subtitle">Chicago</div>
                <p>We are a family owned<br />
                    Mediterranean restaurant,<br />
                    focused on traditional<br />
                    recipes served with a modern<br />
                    twist.</p>
                <Link to="/reservations">
                    <button className="reserve-button">Reserve a Table</button>
                </Link>
            </div>
            <div className="restaurant-image">
                <img src={image} alt="Little Lemon Restaurant" />
            </div>
        </section>
    );
}

export default CallToAction;
