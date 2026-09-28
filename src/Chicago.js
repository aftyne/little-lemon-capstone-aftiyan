import React from 'react';
import chefs from './Images/chefs.jpg';

function Chicago() {
    return (
        <section id ="about" className="about-us-section">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
            <div className="about-us-image">
                <img src={chefs} alt="About Us" />
            </div>
        </section>
    );
}

export default Chicago;