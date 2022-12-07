import React, { useState } from 'react';
//import Logo from '../../assets/profile/logo.jpg';
//import data from './data';
//import { IoIosColorPalette } from 'react-icons/io';
import './navbar.css';
import { AiTwotoneHome, AiFillProject } from 'react-icons/ai';
import { FcServices } from 'react-icons/fc';
import { MdContactMail } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href=' # '
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiTwotoneHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserGraduate />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <FcServices />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <AiFillProject />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Navbar;
