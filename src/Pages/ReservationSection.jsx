import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReservationSection = ({ bookingDetails, setBookingDetails }) => {
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleReservationChange = (index) => {
    setSelectedReservation(index);
  };

  const handleDeleteReservation = () => {
    if (selectedReservation !== null) {
      // Create a new array excluding the selected reservation
      const updatedBookings = bookingDetails.filter((_, index) => index !== selectedReservation);
      // Update the state with the new array
      setBookingDetails(updatedBookings);
      setSelectedReservation(null); // Clear selected reservation after deletion
      console.log('Deleted reservation:', bookingDetails[selectedReservation]);
    }
  };

  return (
    <div className="reservation-section">
      {bookingDetails.length === 0 ? (
        <div className="no-reservation">
          <p className="no-reservations">You have no reservations, book a room to make reservations.</p>
          <Link to="/rooms">
            <button type="button">Rooms</button>
          </Link>
        </div>
      ) : (
        <form>
          <table className="reservation-table">
            <thead>
              <tr>
                <th></th>
                <th>Room Name</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th className="hide-on-mobile">Adults</th>
                <th className="hide-on-mobile">Children</th>
                <th className="hide-on-mobile">Duration</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.map((booking, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="radio"
                      name="reservation"
                      value={index}
                      checked={selectedReservation === index}
                      onChange={() => handleReservationChange(index)}
                    />
                  </td>
                  <td>{booking.rooms || booking.roomName}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td className="hide-on-mobile">{booking.adultGuest}</td>
                  <td className="hide-on-mobile">{booking.childrenGuest}</td>
                  <td className="hide-on-mobile">{`${booking.checkingDays} ${booking.checkingDays === 1 ? 'day' : 'days'}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedReservation !== null && (
            <div className="reservation-actions">
              <p>You have selected <span>{bookingDetails[selectedReservation].rooms || bookingDetails[selectedReservation].roomName}</span> reservation</p>
              <button type="button" onClick={handleDeleteReservation} className='delete-reservation'>
                Delete Reservation
              </button>
              <button type="button" className='confirm-reservation' onClick={() => console.log('Proceeding with reservation:', bookingDetails[selectedReservation])}>
                Confirm Reservation
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ReservationSection;