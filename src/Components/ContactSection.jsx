import React from "react";
import GetInTouch from "./GetInTouch";

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-section-top">
                <div className="section-caption">
                    <span className="bullet"></span>
                    <h5>Location</h5>
                </div>
                <div className="contact-section-text">
                    <h2>Contact Us</h2>
                    <p>
                        Thank you for visiting our website! If you have any questions, comments, or would like to request more information, please don't hesitate to contact us. Our team will respond to your inquiry within 24-48 hours. We look forward to hearing from you!
                    </p>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
};

export default ContactSection;