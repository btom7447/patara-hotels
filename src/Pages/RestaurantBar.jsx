import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import RestaurantSection from "../Components/RestaurantSection";
import MenuSection from "../Components/MenuSection";
import ServicesVideo from "../Components/ServiecsVideo";

const RestaurantBar = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Restaurant & Bar" />
            <RestaurantSection />
            <MenuSection />
            <ServicesVideo name="Restaurant & Bar" />
        </div>
    )
};

export default RestaurantBar;