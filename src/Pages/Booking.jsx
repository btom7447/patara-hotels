import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from "../Components/BreadCrumb";
import BookingForm from "../Components/BookingForm";

const Booking = () => {
  const location = useLocation();
  const room = location.state ? location.state.room : null;

  if (!room) {
    return <div>No room selected. Please go back and select a room.</div>;
  }

  // Assuming room.features is an array of feature names
  const features = room.features || []; // Ensure features is an array or empty

  return (
    <div className="booking-section">
      <BreadCrumb name="Booking" />
      <div className="booking-details">
        <div className="booking-details-left">
          <img src={room.image} alt={room.name} />
          <div className="star-ratings">
            {[...Array(5)].map((star, index) => (
              <FontAwesomeIcon key={index} icon={faSolidStar} />
            ))}
          </div>
          <h2>{room.name}</h2>
          {room.description ? (
            room.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>No description available.</p>
          )}
          <h5>Amenities</h5>
          <ul className="room-features">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheck} /> {feature}
                </li>
              ))
            ) : (
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Basic Amenities will be provided
              </li>
            )}
          </ul>
          <h5>Special Check-in Instructions</h5>
          <p>Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival. 
            For more details, please contact us using the information on the booking confirmation.
          </p>
          <h5>Pets</h5>
          <p>{room.pet ? "Pets allowed" : "Pets not allowed"}</p>
          <h5>Children and extra beds</h5>
          <p>
            Children are welcome, kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $10 per day.
          </p>
        </div>

        <div className="booking-details-right">
          <div className="price-tag">
            <h2>${new Intl.NumberFormat('en-US').format(room.price)}</h2>
            <p>per night</p>
          </div>
          <BookingForm price={room.price} />
        </div>
      </div>
    </div>
  );
};

export default Booking;