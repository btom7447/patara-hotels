import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const FitnessSection = () => {
    return (
        <div className="fitness-section">
            <div className="fitness-section-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Engaging</h5>
                </div>
                <div className="fitness-section-text">
                    <h2>Fitness & Recreation</h2>
                    <p>
                        Embark on an Engaging Fitness & Recreation experience at our hotel, where we invite you to unleash your energy and revitalize your spirit. Our state-of-the-art facilities and diverse programs are designed to inspire and motivate, whether you're seeking an adrenaline-pumping workout or a leisurely escape. From invigorating fitness classes to thrilling recreational activities, our engaging experiences cater to all interests and fitness levels, ensuring a memorable and rejuvenating stay with us.
                    </p>
                    <h6>Fitness Center</h6>
                    <ul className="fa-ul">
                    <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Monday - Thursday: 5.00 am - 10.00 pm</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Friday - Sunday: 6.00 am - 10.00 pm</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Holidays: 8.00 am - 8.00 pm (may vary)</li>
                    </ul>
                    <h6>Pool</h6>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Daily: 7.00 am - 6.00 pm </li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Adult-only-hours 7.00 am - 11.00 pm</li>
                    </ul>
                    <p>
                        <strong>Note:</strong> Prices and offers may vary based on your hotel's specific needs and target audience.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default FitnessSection;