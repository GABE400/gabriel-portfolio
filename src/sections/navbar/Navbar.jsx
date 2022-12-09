import React, { useState } from 'react';
//import Logo from '../../assets/profile/logo.jpg';
//import data from './data';
//import { IoIosColorPalette } from 'react-icons/io';
import './navbar.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { MdContactMail } from 'react-icons/md';
import { FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('header');
  return (
    <nav>
      <Link
        to='header'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActiveNav('header')}
        className={activeNav === 'header' ? 'active' : ''}
      >
        <AiTwotoneHome />
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserGraduate />
      </Link>
      <Link
        to='services'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </Link>
      <Link
        to='portfolio'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaLaptopCode />
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdContactMail />
      </Link>
    </nav>
  );
};

export default Navbar;
