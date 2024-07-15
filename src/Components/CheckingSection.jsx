import React from "react";
import Checking from "./Checking";
import { roomsData } from "./RoomsData";

const CheckingSection = () => {
    return (
        <div className="checking-section">
            <Checking roomsData={roomsData} />
        </div>
    )
};

export default CheckingSection;