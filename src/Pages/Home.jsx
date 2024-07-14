import React from "react";
import HeroCarousel from "../Components/HeroCarousel";
import WelcomeSection from "../Components/WelcomeSection";
import DiscoverSection from "../Components/DiscoverSection";
import PromotionalVideo from "../Components/PromotionalVideo";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
    return (
        <div className="home-page">
            <HeroCarousel />
            <WelcomeSection />
            <DiscoverSection />
            <PromotionalVideo />
            <ServicesSection />
            
        </div>
    )
};

export default Home;