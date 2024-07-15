import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useNavigate } from 'react-router-dom';

const RoomsCarousel = ({ roomsData }) => {
  const navigate = useNavigate();

  const handleBooking = (room) => {
    navigate('/booking', { state: { room } });
  };
  

  return (
    <div className="rooms-carousel">
      <Splide 
        options={{ 
          type: 'slide',
          gap: '3rem',
          focus: 'center', 
          padding: '20%', 
          pagination: false,
          breakpoints: {
            1200: {
              gap: '2rem',
              padding: '15%',
            },
            768: {
              gap: '1.5rem',
              padding: '10%',
            },
            480: {
              gap: '1rem',
              padding: '5%',
            }
          }
        }}
      >
        {roomsData.map((room, index) => (
          <SplideSlide key={index}>
            <div className="room-slide">
              <img src={room.image} alt={room.name} className="room-image" />
            </div>
            <div className="room-caption">
                <div className="room-description">  
                    <h2>{room.name}</h2>
                    <div className="rooms-specs">
                    <p>{room.dimension} m<span>2</span>,</p>
                    <p>{room.adults} {parseInt(room.adults) === 1 ? 'adult' : parseInt(room.adults) === 0 ? '' : 'adults'}</p>
                    <p>{room.children} {parseInt(room.children) === 1 ? 'child' : parseInt(room.children) === 0 ? '' : 'children'}</p>
                    </div>
                </div>
                <button onClick={() => handleBooking(room)}>Book Now</button>
                <div className="room-price">
                    <p>from</p>
                    <h3>${new Intl.NumberFormat('en-US').format(room.price)}</h3>
                </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default RoomsCarousel;