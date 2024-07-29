import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column company-info">
                    <h3>Company Name</h3>
                    <p><span className="dot"></span> 123 Business Rd, Business City, BC 12345</p>
                    <p><span className="dot"></span> Email: contact@company.com</p>
                    <p><span className="dot"></span> Phone: (123) 456-7890</p>
                    <p><span className="dot"></span> Location: 45.6789° N, 123.4567° W</p>
                </div>
                <div className="footer-column services">
                    <h3>Our Services</h3>
                    {/* <ul> */}
                    <p><span className="dot"></span> App Development</p>
                    <p><span className="dot"></span> Web App Development</p>
                    <p><span className="dot"></span> UI/UX Design</p>
                    <p><span className="dot"></span> Website Development</p>
                    <p><span className="dot"></span> Digital Marketing</p>
                    <p><span className="dot"></span> Logo Design</p>
                    <p><span className="dot"></span> Consulting</p>
                    {/* </ul> */}
                </div>
                <div className="footer-column contact-us">
                    <h3>Contact Us</h3>
                    <p><span className="dot"></span> Email: contact@company.com</p>
                    <p><span className="dot"></span> Phone: (123) 456-7890</p>
                    <p><span className="dot"></span> Address: 123 Business Rd, Business City, BC 12345</p>
                    <p><span className="dot"></span> Follow us on social media:</p>
                    <ul className="social-media">
                        <li><a href="#"><span className="dot"></span> Facebook</a></li>
                        <li><a href="#"><span className="dot"></span> Twitter</a></li>
                        <li><a href="#"><span className="dot"></span> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
