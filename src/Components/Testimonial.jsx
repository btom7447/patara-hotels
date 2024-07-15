import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = ({ testimonialData }) => {
  return (
    <div className="testimonial-carousel">
        <h1>What Our Patron's Say</h1>
        <Splide
            options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 4500,
            arrows: false,
            pagination: false,
            pauseOnHover: true,
            }}
        >
            {testimonialData.map((testimonial, index) => (
            <SplideSlide key={index}>
                <div className="testimonial-slide">
                    <div className="star-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                        ))}
                    </div>
                    <p>"{testimonial.testimony}"</p>
                    <div className="patrons">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div className="patron-details">
                            <h5>{testimonial.name}</h5>
                            <p>{testimonial.title}</p>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            ))}
        </Splide>
    </div>
  );
};

export default Testimonial;