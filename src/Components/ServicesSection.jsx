import React from "react";
import AmenitiesCarousel from "./AmenitiesCarousel";
import { amenitiesData } from "./amenitiesData";

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="services-section-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Featured</h5>
                </div>
                <div className="discover-section-text">
                    <h2>Hotel Amenities</h2>
                    <p>
                        Welcome to our hotel, where our dedicated team provides 24/7 support and a range of services for a comfortable and convenient stay. Enjoy complimentary Wi-Fi, laundry and dry cleaning services, a fitness center, and concierge assistance with transportation, tours, and restaurant reservations. Whether traveling for business or leisure, our hotel offers a business center, meeting rooms, room service, a complimentary breakfast buffet, and a relaxing spa and wellness center to ensure a successful and rejuvenating stay.
                    </p>
                </div>
            </div>
            <AmenitiesCarousel amenitiesData={amenitiesData} />
        </div>
    )
};

export default ServicesSection;