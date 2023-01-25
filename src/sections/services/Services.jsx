//import data from './data';
//import Card from '../../components/Card';
import { FiCheckCircle } from 'react-icons/fi';
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>I give you the best in all the services below!</h5>
      <h2>What I Offer</h2>
      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>User Centered Design</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>The Five Elements of UX Design</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Design Thinking</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lean UX</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Double Diamond</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>My designs are modern</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Frontend Web Development</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Backend Web Development</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Full Stack Web Development</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>(Web 3) Decentralized Application</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>SEO (Search Engine Optimization)</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>App Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>PWA (Progressive Web Apps)</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Hybrid Mobile Apps</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Native Mobile Apps</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
