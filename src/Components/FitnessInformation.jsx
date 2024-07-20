import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { fitnessData } from "./FitnessData";

const FitnessInformation = () => {
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
    <div className="fitness-information-section">
      <div className="fitness-information-section-top">
        <div className="section-caption">
          <span className="bullet"></span>
          <h5>Information on</h5>
        </div>
        <div className="fitness-information-section-text">
          <h2>Our Fitness Services</h2>
          <p>
            Discover a diverse array of fitness activities, classes, and programs tailored to suit every fitness level and interest. Whether you're a seasoned athlete or just starting your wellness journey, our expert trainers and state-of-the-art facilities will guide and support you every step of the way.
          </p>
        </div>
        <div className="accordion-section">
          {fitnessData.map((item, index) => (
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
                <ul>
                  {item.list.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessInformation;