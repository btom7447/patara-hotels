import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ServicesDisplay from "../Components/ServicesDisplay";
import { servicesData } from "../Components/servicesData";
import CheckingSection from "../Components/CheckingSection";

const Services = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Our Services" />
            <ServicesDisplay servicesData={servicesData} />
            <CheckingSection />
        </div>
    )
};

export default Services;