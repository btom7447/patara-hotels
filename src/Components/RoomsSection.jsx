import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const RoomsSection = ({ roomsData }) => {
    const navigate = useNavigate();
    const [showAllRooms, setShowAllRooms] = useState(false);

    const handleBooking = (room) => {
        navigate('/booking', { state: { room } });
    };

    const handleLoadMore = () => {
        setShowAllRooms(true);
    };

    const displayedRooms = showAllRooms ? roomsData : roomsData.slice(0, 4);

    useEffect(() => {
        if (showAllRooms) {
            const roomBoxes = document.querySelectorAll('.room-box');
            roomBoxes.forEach((box, index) => {
                setTimeout(() => {
                }, index * 200); 
            });
        }
    }, [showAllRooms]);

    return (
        <div className="rooms-section">
            {displayedRooms.map((room, index) => (
                <div key={index} className="room-box">
                    <div className="room-image">
                        <img src={room.image} alt={room.name} />
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
                </div>
            ))}
            {!showAllRooms && (
                <button
                    type="button"
                    className="load-more"
                    onClick={handleLoadMore}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default RoomsSection;