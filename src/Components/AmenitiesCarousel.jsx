import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const AmenitiesCarousel = ({ amenitiesData }) => {
  return (
    <div className="amenities-carousel">
      <Splide 
        options={{
          type: 'slide',
          perPage: 3,
          gap: '2.5rem',
          pagination: true,
          arrows: false,
          breakpoints: {
            1200: {
              perPage: 2,
              gap: '1.5rem',
            },
            768: {
              perPage: 1,
              gap: '1rem',
            },
          },
        }}
      >
        {amenitiesData.map((amenity, index) => (
          <SplideSlide key={index}>
            <div className="amenity-slide">
              <div className="circle-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{amenity.name}</h3>
              <p>{amenity.text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default AmenitiesCarousel;