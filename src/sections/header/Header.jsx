import HeaderImage from '../../assets/profile/Profile.jpg';
import data from './data';
import './header.css';
//import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header_container'>
        <div className='header_profile'>
          <img src={HeaderImage} alt='profile' />
        </div>
        <h3>Hi, I am Gabriel Chipaya</h3>
        <p>
          My occupation is building your dream website, mobile or web app. Get
          in touch, let's talk about your project for a modern, mobile
          responsive, highly performant designs today!
        </p>
        <div className='header_cta'>
          <a href='#contact' className='btn primary'>
            Let's Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        {/*<a href='#about' className='scroll_down'>
          <FaArrowRight /> Scroll Down
        </a>*/}
        <div className='header_socials'>
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
