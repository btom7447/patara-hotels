import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { spaData } from "./SpaData";

const SpaEtiquette = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleAccordionToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        if (activeIndex === index) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0";
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="spa-etiquette-section">
      <div className="spa-etiquette-section-top">
        <div className="section-caption">
          <span className="bullet"></span>
          <h5>Spa Etiquette</h5>
        </div>
        <div className="spa-etiquette-section-text">
          <h2>Spa Guidelines</h2>
          <p>
            To ensure a relaxing and enjoyable experience for all our guests, we kindly ask that you observe the following spa etiquette guidelines.
          </p>
        </div>
        <div className="accordion-section">
          {spaData.map((item, index) => (
            <div key={index}>
              <div className="accordion-header" onClick={() => handleAccordionToggle(index)}>
                <div className="accordion-icon">
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronDown : faChevronRight}
                  />
                </div>
                <h3>{item.title}</h3>
              </div>
              <div
                className={`accordion-content ${activeIndex === index ? "active" : ""}`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaEtiquette;