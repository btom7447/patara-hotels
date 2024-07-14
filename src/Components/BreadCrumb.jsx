import React from "react";
import ScrollIndicator from "./ScrollIndicator";

const BreadCrumb = ({ name }) => {
  return (
    <div className="bread-crumb-section">
      <div className="bread-crumb-texts">
        <h3>Patara</h3>
        <h5>Resort & Spa Hotel</h5>
        <h1>{name}</h1>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default BreadCrumb;