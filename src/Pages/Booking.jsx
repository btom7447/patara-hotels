import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import BookingSection from "../Components/BookingSection";

const Booking = () => {
 
  return (
    <div className="booking-page">
      <BreadCrumb name="Booking" />
      <BookingSection />
      
    </div>
  );
};

export default Booking;