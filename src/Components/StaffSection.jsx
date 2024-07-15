import React from "react";
import { StaffData } from "./StaffData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const StaffSection = () => {
    return (
        <div className="staff-section">
            {StaffData.map((staff, index) => (
                <div className="staff" key={index}>
                    <img src={staff.image} alt={staff.name} />
                    <div className="staff-caption">
                        <div className="staff-socials">
                            {/* EMAIL */}
                            <a href={staff.email} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            {/* TWITTER */}
                            <a href={staff.twitter} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            {/* INSTAGRAM */}
                            <a href={staff.instagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                        <div className="staff-details">
                            <h3>{staff.name}</h3>
                            <p>{staff.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaffSection;