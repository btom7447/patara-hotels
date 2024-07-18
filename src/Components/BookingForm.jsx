import React, { useState, useEffect, useContext } from 'react';
import CustomSelect from './CustomSelect';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ price, roomName }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const today = new Date();
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adultGuest, setAdultGuest] = useState('1 Adult');
  const [childrenGuest, setChildrenGuest] = useState('');
  const [checkingDays, setCheckingDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    if (checkInDate && checkingDays) {
      const newCheckOutDate = new Date(checkInDate);
      newCheckOutDate.setDate(newCheckOutDate.getDate() + checkingDays);
      setCheckOutDate(newCheckOutDate);
    }
  }, [checkInDate, checkingDays]);

  useEffect(() => {
    setTotalPrice(price * checkingDays);
  }, [price, checkingDays]);

  const handleCheckingDaysChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setCheckingDays(days > 0 ? days : 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!childrenGuest) {
      toast.error('Please select the number of children.');
      return;
    }

    const bookingDetails = {
      checkInDate: checkInDate.toISOString().split('T')[0],
      checkOutDate: checkOutDate.toISOString().split('T')[0],
      adultGuest,
      childrenGuest,
      roomName,  // Include the roomName
      checkingDays
    };

    const isDuplicate = cartItems.some(item => 
      item.checkInDate === bookingDetails.checkInDate &&
      item.checkOutDate === bookingDetails.checkOutDate &&
      item.adultGuest === bookingDetails.adultGuest &&
      item.childrenGuest === bookingDetails.childrenGuest &&
      item.roomName === bookingDetails.roomName  // Check for duplicate roomName
    );

    if (isDuplicate) {
      toast.error('Reservation has already been made.');
      return;
    }

    setCartItems(prev => [...prev, bookingDetails]);

    toast.success(`${roomName} has been added to your reservations`);
  };

  const handleClearSelection = () => {
    setCheckInDate(today);
    setCheckOutDate(null);
    setAdultGuest('1 Adult');
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
        options={["None", "1 Child", "2 Children", "3 Children", "4 Children"]}
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
          onChange={(date) => setCheckInDate(date[0])}
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
          onChange={(date) => setCheckOutDate(date[0])}
          options={{ dateFormat: 'Y-m-d' }}
          placeholder="Check-Out Date"
        />
      </div>

      <span className="price-per-night">
        Total booking duration: {checkingDays} {checkingDays === 1 ? 'night' : 'nights'}
      </span> <br />
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