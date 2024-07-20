import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ServicesVideo from "../Components/ServiecsVideo";
import FitnessSection from "../Components/FitnessSection";
import FitnessInformation from "../Components/FitnessInformation";

const FitnessRecreation = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Fitness & Recreation" />
            <FitnessSection />
            <FitnessInformation />
            <ServicesVideo name="Fitness & Recreation" />
        </div>
    )
};

export default FitnessRecreation;