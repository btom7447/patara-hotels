import React, { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({ price }) => {
  const today = new Date();
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adultGuest, setAdultGuest] = useState('');
  const [childrenGuest, setChildrenGuest] = useState('');
  const [checkingDays, setCheckingDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(price * checkingDays);
  }, [price, checkingDays]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(new Date(checkOutDate) - new Date(checkInDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Correct calculation
      setCheckingDays(diffDays);
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    if (checkInDate && checkingDays) {
      const newCheckOutDate = new Date(checkInDate);
      newCheckOutDate.setDate(newCheckOutDate.getDate() + checkingDays);
      setCheckOutDate(newCheckOutDate);
    }
  }, [checkingDays]);

  const handleCheckingDaysChange = (e) => {
    setCheckingDays(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      checkInDate,
      checkOutDate,
      adultGuest,
      childrenGuest,
      checkingDays
    };

    // Save bookingDetails to a variable or send to the backend
    console.log("Booking Details:", bookingDetails);
  };

  const handleClearSelection = () => {
    setCheckInDate(today);
    setCheckOutDate(null);
    setAdultGuest('');
    setChildrenGuest('');
    setCheckingDays(1);
  };

  return (
    <form className="booking-form-container" onSubmit={handleSubmit}>
      <label htmlFor="adultGuest">Adult: {adultGuest}</label>
      <CustomSelect
        options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
        value={adultGuest}
        onChange={setAdultGuest}
        placeholder="Adult"
      />

      <label htmlFor="childrenGuest">Children: {childrenGuest}</label>
      <CustomSelect
        options={["1 Child", "2 Children", "3 Children", "4 Children"]}
        value={childrenGuest}
        onChange={setChildrenGuest}
        placeholder="Children"
      />

      <button type="button" className="clear-selection" onClick={handleClearSelection}>
        Clear selection
      </button>
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

      <span className="price-per-night">${new Intl.NumberFormat('en-US').format(totalPrice)}</span>

      <div className="booking-buttons">
        <input
          type="number"
          name="checkingDays"
          id="checkingDays"
          value={checkingDays}
          onChange={handleCheckingDaysChange}
          placeholder="Number of Days"
        />
        <button type="submit">Book</button>
      </div>
    </form>
  );
};

export default BookingForm;