import HeaderImage from '../../assets/profile/profile.png';
//import data from './data';
import './header.css';
import CTA from './CTA';
import HeaderSocialMedia from './HeaderSocialMedia';
//import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header_container'>
        <h5>Hello, I'm</h5>
        <h1>Gabriel</h1>
        <h5 className='text-light'>I'm a Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocialMedia />

        <div className='me'>
          <img src={HeaderImage} alt='profile'></img>
        </div>

        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
