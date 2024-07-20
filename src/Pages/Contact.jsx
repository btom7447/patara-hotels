import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ContactSection from "../Components/ContactSection";
import MapSection from "../Components/MapSection";

const Contact = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Contact Us" />
            <ContactSection />
            <MapSection />
        </div>
    )
};

export default Contact;