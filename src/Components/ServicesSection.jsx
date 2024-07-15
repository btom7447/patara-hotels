import React from "react";
import ServicesDisplay from "./ServicesDisplay";
import { servicesData } from "./servicesData";

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="services-section-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Discover</h5>
                </div>
                <div className="discover-section-text">
                    <h2>Our Servics</h2>
                    <p>
                        Indulge in the epitome of luxury and sophistication at Patara Hotels, where our extensive range of high-end services is designed to surpass your every expectation. From exquisite culinary experiences to rejuvenating wellness and fitness programs, we cater to your every need. Unwind in style with exclusive cultural and entertainment options, or conduct business with ease in our state-of-the-art facilities. Whether you're seeking relaxation, inspiration, or productivity, our exceptional services will envelop you in comfort and refinement, ensuring an unforgettable stay with us.
                    </p>
                </div>
            </div>
            <ServicesDisplay servicesData={servicesData} />


        </div>
    )
};

export default ServicesSection;