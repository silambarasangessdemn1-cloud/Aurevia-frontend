import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <img src="https://uploads.onecompiler.io/44h79n8m3/1789648780007/fe4589a4-ab99-42f1-a612-5ff6ac666048-removebg-preview.png" alt="Aurevia Logo" />
        </Link>
        <nav className={`nav-links ${isOpen ? 'show' : ''}`} id="navLinks">
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
          <NavLink to="/specialities" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Specialities</NavLink>
          <NavLink to="/why-choose-us" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Why Choose Us</NavLink>
          <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
          <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="nav-btn">
          <i className="fa-regular fa-calendar"></i> Book Appointment
        </Link>
        <div className="menu" onClick={toggleMenu}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
