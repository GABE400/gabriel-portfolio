import data from './data';
import dataSocial from '../header/data';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='home' className='footer_logo'>
        My name is Gabriel Chipaya
      </a>

      <ul className='permalinks'>
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className='footer_socials'>
        {dataSocial.map((item) => (
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

      <div className='footer_copyright'>
        <small>&copy; 2022. My Portfolio </small>
      </div>
    </footer>
  );
};

export default Footer;
