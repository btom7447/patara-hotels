import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : 'transparent'}`}>
      <div className="navbar-container">
        <NavLink to="/">
          <img src="https://webredox.net/demo/wp/patara/wp-content/themes/patara/includes/images/logo-dark.png" alt="Hotel Logo" className="navbar-logo" />
        </NavLink>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
          {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rooms" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>Rooms</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-links" activeclassname="active" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItems >= 0 && <span className="cart-badge">{cartItems}</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;