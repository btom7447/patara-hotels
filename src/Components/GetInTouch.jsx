import { faEnvelope, faLocationDot, faPhoneFlip, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
    return (
        <div className="get-in-touch-section">
            <div className="contact-boxes">
                {/* RESERVATIONS */}
                <div className="contact-box">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <div className="contacts">
                        <h5>Reservation</h5>
                        <p>+234 567 8910</p>
                    </div>
                </div>
                {/* EMAIL */}
                <div className="contact-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className="contacts">
                        <h5>Email Info</h5>
                        <p>contacts@patara.hotels</p>
                    </div>
                </div>
                {/* ADDRESS */}
                <div className="contact-box">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className="contacts">
                        <h5>Address</h5>
                        <p>38 Broadway NY, 1001</p>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
};

export default GetInTouch;