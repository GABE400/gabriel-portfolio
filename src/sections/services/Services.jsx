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
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
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
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
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
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
            <li>
              <FiCheckCircle className='service_list-icon' />
              <p>Lorem ipum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
