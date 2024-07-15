import React from "react";
import Testimonial from "./Testimonial";
import { testimonialData } from "./TestimonialData";

const TestimonialSection = () => {
    return (
        <div className="testimonial-section">
            <div className="section-caption">
                <span className="bullet"></span>
                <h5>Testimonials</h5>
            </div>
            <Testimonial testimonialData={testimonialData} />
        </div>
    )
};

export default TestimonialSection;