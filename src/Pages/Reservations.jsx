import React, { useContext } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ReservationSection from "./ReservationSection";
import { CartContext } from "../Components/CartProvider";

const Reservations = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    return (
        <div className="web-page">
            <BreadCrumb name="Reservations" />
            <ReservationSection bookingDetails={cartItems} setBookingDetails={setCartItems} />
        </div>
    );
};

export default Reservations;