import React from "react";
import HeroCarousel from "../Components/HeroCarousel";
import WelcomeSection from "../Components/WelcomeSection";
import DiscoverSection from "../Components/DiscoverSection";
import PromotionalVideo from "../Components/PromotionalVideo";
import TestimonialSection from "../Components/TestimonialSection";
import AmenitiesSection from "../Components/AmenitiesSection";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
    return (
        <div className="web-page">
            <HeroCarousel />
            <WelcomeSection />
            <DiscoverSection />
            <PromotionalVideo />
            <AmenitiesSection />
            <TestimonialSection />
            <ServicesSection />
        </div>
    )
};

export default Home;