import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const HeaderSocialMedia = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href='https://twitter.com' target='_blank' rel='noreferrer'>
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocialMedia;
