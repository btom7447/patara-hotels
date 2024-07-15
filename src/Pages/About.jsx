import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import PromotionalVideo from "../Components/PromotionalVideo";
import WelcomeSection from "../Components/WelcomeSection";
import StaffSection from "../Components/StaffSection";
import CheckingSection from "../Components/CheckingSection";
import AmenitiesSection from "../Components/AmenitiesSection";

const About = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="About Us" />
            <WelcomeSection />
            <PromotionalVideo />
            <StaffSection />
            <CheckingSection />
            <AmenitiesSection />
        </div>
    )
};

export default About;