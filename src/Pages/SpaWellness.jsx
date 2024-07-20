import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import SpaSection from "../Components/SpaSection";
import ServicesVideo from "../Components/ServiecsVideo";
import SpaEtiquette from "../Components/SpaEtiquette";
import CheckingSection from "../Components/CheckingSection";

const SpaWellness = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Spa & Wellness" />
            <SpaSection />
            <ServicesVideo name="Spa & Wellness" />
            <SpaEtiquette />
            <CheckingSection />
        </div>
    )
};

export default SpaWellness;