// Navbar.jsx
import React, { useRef, useState }  from 'react';
import './Navbar.css'; // Import your CSS file for styling
import Dropdown from 'react-bootstrap/Dropdown';
// import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
   
  } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef2 = useRef(null);
  

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  return (
    <nav className="navbar">
         


      <div className="navbar-left">
        
      <Dropdown className="menu1" show={isOpen2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} ref={dropdownRef2} >
          <Dropdown.Toggle className="navbar-item" id="dropdown-basic-button">
            Brands
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className='dd3'>
            <Dropdown.Item id='xx' href="#/action-1">All Brands</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">$hocky</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-3">bitfins</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-1">Cardona stoners Club</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">Cryptoraggies</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-3">Dunkout</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='menu1' show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
          <Dropdown.Toggle className="navbar-item" id="dropdown-basic-button">
            Shop
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className='dd'>
            <div className='dd1'>
            <Dropdown.Item id='xx' href="#/action-1">Phone Cases</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">Accessories</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-3">Card Holder</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-1">Charger</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">Powerbank</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-3">Airdopes</Dropdown.Item>
            </div>
            <div className='dd2'>
            <Dropdown.Item id='xx' href="#/action-1">Unisex hoodies</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">Unisex Zip hoodies</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-3">Unisex sweatshirts</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-1">Unisex tshirts</Dropdown.Item>
            <Dropdown.Item id='xx' href="#/action-2">Man's tanks</Dropdown.Item>
            </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        
        
        <div className="navbar-item">Premium</div>
        <div className="navbar-item">Gift Card</div>
        
       
        
        
      </div>


      <div className="navbar-center">
        <img src="./logobrava.png" alt="Logo" className="navbar-logo" />
      </div>



      <div className="navbar-right">
        <div className="navbar-item">Become an Affiliate</div>


        


        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      </div>



    </nav>
  );
};

export default Navbar;
