import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Footer = ({ roomsData }) => {
    const navigate = useNavigate();

    const handleRoomClick = (room) => {
        navigate('/booking', { state: { room } });
    };

    return (
        <footer>
            <div className="footer-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Contact Us!</h5>
                </div>
                <div className="footer-get-in-touch">
                    <h3>Get in touch</h3>
                    <p>1616 Broadway NY, New York 10001</p>
                    <p>+1 203 123 456 789</p>
                    <p>info@hotel.com</p>
                    <div className="footer-socials">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                </div>
                <div className="footer-rooms-list">
                    <h3>Rooms & Suites</h3>
                    <ul>
                        {roomsData.map((room, index) => (
                            <li key={index} onClick={() => handleRoomClick(room)}>
                                {room.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <span className="copy-right">
                    © Copyright 2024 Patara. Developed By Kmini 
                </span>
                <span className="terms-condition">
                    Terms & Conditions
                </span>
            </div>
        </footer>
    );
};

export default Footer;