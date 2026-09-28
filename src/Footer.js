import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footer from './Images/footer.jpg';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-column footer-image">
                <img src={footer} alt="Footer Image" />
            </div>
            <div className="footer-column">
                <ul className="doormat-navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>Phone: +1234567890</p>
                <p>Email: littlelemon@littlemon.com</p>
                <p>Address: 123 Street, City, Country</p>
            </div>
            <div className="footer-column">
                <ul className="social-media-links">
                    <li>
                        <a href="#">
                            Facebook
                            <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Twitter
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Instagram
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;