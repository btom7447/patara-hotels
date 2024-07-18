import React, { useState, useContext, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checking = ({ roomsData }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [checkingDays, setCheckingDays] = useState(1);
  const [adultGuest, setAdultGuest] = useState('1 Adult');
  const [childrenGuest, setChildrenGuest] = useState('');
  const [rooms, setRooms] = useState('');
  const [roomSelected, setRoomSelected] = useState(false);
  const [childrenSelected, setChildrenSelected] = useState(false);

  useEffect(() => {
    if (rooms) {
      setRoomSelected(true);
    } else {
      setRoomSelected(false);
    }
  }, [rooms]);

  useEffect(() => {
    if (childrenGuest) {
      setChildrenSelected(true);
    } else {
      setChildrenSelected(false);
    }
  }, [childrenGuest]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(new Date(checkOutDate) - new Date(checkInDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setCheckingDays(diffDays);
    } else {
      setCheckingDays(1);
    }
  }, [checkInDate, checkOutDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomSelected) {
      toast.error('Please select a room');
      return;
    }

    if (!childrenSelected) {
      toast.error('Please select number of children');
      return;
    }

    const bookingDetails = {
      checkInDate: checkInDate.toISOString().split('T')[0],
      checkOutDate: checkOutDate.toISOString().split('T')[0],
      checkingDays,
      adultGuest,
      childrenGuest,
      rooms
    };

    const isDuplicate = cartItems.some(item => 
      item.checkInDate === bookingDetails.checkInDate &&
      item.checkOutDate === bookingDetails.checkOutDate &&
      item.adultGuest === bookingDetails.adultGuest &&
      item.childrenGuest === bookingDetails.childrenGuest &&
      item.rooms === bookingDetails.rooms
    );

    if (isDuplicate) {
      toast.error('Reservation has already been made.');
      return;
    }

    setCartItems(prev => [...prev, bookingDetails]);

    toast.success(`${rooms} has been added to your reservations`);
  };

  const roomNames = roomsData.map(room => room.name);

  return (
    <form className="checking-container" onSubmit={handleSubmit}>
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

      <CustomSelect
        options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
        value={adultGuest}
        onChange={setAdultGuest}
        placeholder="Adult"
      />

      <CustomSelect
        options={["None", "1 Child", "2 Children", "3 Children", "4 Children"]}
        value={childrenGuest}
        onChange={(selectedChildren) => {
          setChildrenGuest(selectedChildren);
          if (selectedChildren !== '') {
            setChildrenSelected(true);
          } else {
            setChildrenSelected(false);
          }
        }}
        placeholder="Children"
      />

      <CustomSelect
        options={roomNames}
        value={rooms}
        onChange={(selectedRoom) => {
          setRooms(selectedRoom);
          setRoomSelected(true);
        }}
        placeholder="Room"
      />

      <button type="submit">Check Now</button>
    </form>
  );
};

export default Checking;