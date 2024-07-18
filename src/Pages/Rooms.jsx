import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import RoomsSection from "../Components/RoomsSection";
import { roomsData } from "../Components/RoomsData";
import CheckingSection from "../Components/CheckingSection";

const Rooms = () => {
    return (
        <div className="web-page">
            <BreadCrumb name="Rooms & Suites" />
            <RoomsSection roomsData={roomsData} />
            <CheckingSection />
        </div>
    )
};

export default Rooms;