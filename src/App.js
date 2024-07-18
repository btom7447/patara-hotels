import React from 'react';
import { ToastContainer } from 'react-toastify'; 
import './Styles/index.css';
import './Styles/mobile.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Services from './Pages/Services';
import RestaurantBar from './Pages/RestaurantBar';
import Contact from './Pages/Contact';
import Cart from './Pages/Reservations';
import Booking from './Pages/Booking';
import Footer from './Components/Footer';
import { roomsData } from './Components/RoomsData';
import SpaWellness from './Pages/SpaWellness';
import FitnessRecreation from './Pages/FitnessRecreation';
import ArtCulture from './Pages/ArtCulture';
import CinemaMedia from './Pages/CinemaMedia';
import EventMeetings from './Pages/EventsMeetings';
import { CartProvider } from './Components/CartProvider';
import Loader from './Components/Loader';
import usePageLoader from './Components/usePageLoader';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <LoaderWrapper />
        <Navbar />
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/rooms" element={<Rooms />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/services/restaurant-bar" element={<RestaurantBar />} /> 
          <Route path="/services/spa-wellness" element={<SpaWellness />} /> 
          <Route path="/services/fitness-recreation" element={<FitnessRecreation />} /> 
          <Route path="/services/art-culture" element={<ArtCulture />} /> 
          <Route path="/services/cinema-media" element={<CinemaMedia />} /> 
          <Route path="/services/event-meetings" element={<EventMeetings />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer roomsData={roomsData} />
      </Router>
      <ToastContainer position='top-right' autoClose={3000} />
    </CartProvider>
  );
}

const LoaderWrapper = () => {
  const loading = usePageLoader();
  return loading ? <Loader /> : null;
};

export default App;