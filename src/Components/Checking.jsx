import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Checking = ({ roomsData }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adultGuest, setAdultGuest] = useState('');
  const [childrenGuest, setChildrenGuest] = useState('');
  const [rooms, setRooms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      checkInDate,
      checkOutDate,
      adultGuest,
      childrenGuest,
      rooms,
    };

    // Save bookingDetails to a variable or send to the backend
    console.log("Booking Details:", bookingDetails);
  };

  const roomNames = roomsData.map(room => room.name); // Extract room names

  return (
    <form className="checking-container" onSubmit={handleSubmit}>
      <div className="date-input-container">
        <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
        <Flatpickr
          data-enable-time
          className="custom-date-input"
          value={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          options={{ dateFormat: 'Y-m-d' }}
          placeholder="Check-In Date"
        />
      </div>
      <div className="date-input-container">
        <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
        <Flatpickr
          data-enable-time
          className="custom-date-input"
          value={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          options={{ dateFormat: 'Y-m-d' }}
          placeholder="Check-Out Date"
        />
      </div>

      <CustomSelect
        options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
        value={adultGuest}
        onChange={setAdultGuest}
        placeholder="Adult"
      />

      <CustomSelect
        options={["1 Child", "2 Children", "3 Children", "4 Children"]}
        value={childrenGuest}
        onChange={setChildrenGuest}
        placeholder="Children"
      />

      <CustomSelect
        options={roomNames} // Pass room names here
        value={rooms}
        onChange={setRooms}
        placeholder="Room"
      />

      <button type="submit">Check Now</button>
    </form>
  );
};

export default Checking;