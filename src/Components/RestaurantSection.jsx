import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const RestaurantSection = () => {
    return (
        <div className="restaurant-section">
            <div className="restaurant-section-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Taste</h5>
                </div>
                <div className="restaurant-section-text">
                    <h2>Patara Restaurant</h2>
                    <p>
                        Indulge in a culinary journey at Patara Restaurant, where our chefs craft delicious dishes using fresh ingredients and innovative techniques. Savor international flavors and local specialties in a stylish setting, paired with an extensive wine list and craft cocktails. Unwind with friends and colleagues at our trendy bar, featuring live music and themed nights. Whether you're in the mood for a hearty breakfast, a quick lunch, or a romantic dinner, our restaurant and bar have something for everyone. Come taste the difference at Patara Restaurant.
                    </p>
                    <h6>Hours</h6>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Breakfast: 7.00 am - 11.00 am (daily)</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Lunch: 12.00 noon - 2.00 pm (daily)</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faClock} /></span> Dinner: open from 6.30 pm, last order at 10.00 pm</li>
                    </ul>
                    <h6>Dress Code</h6>
                    <p>Smart casual (no shorts, caps or sandals permitted)</p>
                    <h6>Terrace</h6>
                    <p>Open for drinks only</p>
                </div>
            </div>
        </div>
    )
};

export default RestaurantSection;