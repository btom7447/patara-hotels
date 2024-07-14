import React from "react";
import RoomsCarousel from "./RoomCarousels";
import { roomsData } from "./RoomsData";

const DiscoverSection = () => {
  return (
    <div className="discover-section">
        <div className="discover-section-top">
            <div className="section-caption">
                <span className="bullet"></span>
                <h5>Discover</h5>
            </div>
            <div className="discover-section-text">
                <h2>Rooms & Suites</h2>
                <p>
                    Select your perfect retreat from our diverse range of rooms, each designed to provide a unique and comfortable experience. From cozy singles to spacious suites, our rooms cater to various needs and preferences. Enjoy modern amenities, stylish decor, and stunning views that will make your stay with us truly unforgettable. Book your preferred room today and indulge in a relaxing getaway!
                </p>
            </div>
        </div>
        <RoomsCarousel roomsData={roomsData} />
    </div>
  );
};

export default DiscoverSection;