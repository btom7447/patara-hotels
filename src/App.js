import React from 'react';
import './Styles/index.css';
import './Styles/mobile.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Booking from './Pages/Booking';
import Footer from './Components/Footer';
import { roomsData } from './Components/RoomsData';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} /> 
        <Route path="/rooms" element={<Rooms />} /> 
        <Route path="/services" element={<Services />} />         
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer roomsData={roomsData} />
    </Router>
  )
}

export default App;
