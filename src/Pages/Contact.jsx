import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ContactSection from "../Components/ContactSection";

const Contact = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Contact Us" />
            <ContactSection />
        </div>
    )
};

export default Contact;