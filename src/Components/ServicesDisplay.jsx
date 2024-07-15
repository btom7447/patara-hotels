import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ServicesDisplay = ({ servicesData }) => {
  return (
    <div className="services-display-grid">
      {servicesData.map((service, index) => (
        <div className="service-item" key={index}>
          <img src={service.image} alt={service.name} className="service-image" />
          <h5>{service.name}</h5>
          <Link to={service.link}>
            <button type="button" className="service-button">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesDisplay;