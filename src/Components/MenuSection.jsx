import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { menuData } from "./MenuData";

const MenuSection = () => {
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
    <div className="menu-section">
      <div className="menu-section-top">
        <div className="section-caption">
          <span className="bullet"></span>
          <h5>Yummy</h5>
        </div>
        <div className="menu-section-text">
          <h2>Restaurant Menu</h2>
          <p>
            Indulge in our culinary delights! Our menu features a range of flavors and dishes, from classic favorites to innovative creations. Savor our signature starters, indulge in our tender main courses, and satisfy your sweet tooth with our decadent desserts. Pair your meal with a selection from our extensive wine list or craft cocktails. Come taste the difference at our restaurant!
          </p>
        </div>
        <div className="accordion-section">
          {Object.keys(menuData).map((category, index) => (
            <div key={index}>
              <div className="accordion-header" onClick={() => handleAccordionToggle(index)}>
                <div className="accordion-icon">
                  <FontAwesomeIcon
                    icon={activeIndex === index ? faChevronDown : faChevronRight}
                  />
                </div>
                <h3>{category}</h3>
              </div>
              <div
                className={`accordion-content ${activeIndex === index ? "active" : ""}`}
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <ul>
                  {menuData[category].map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span>{item.name}</span>
                      <span>
                        {typeof item.price === "object"
                        ? `Glass: $${item.price.glass}, Bottle: $${item.price.bottle}`
                        : `$${item.price}`}
                      </span>
                    </li>
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

export default MenuSection;